import React, { useEffect, useState } from 'react';
import {
    OuterContainer,
    Container,
    Title,
    KanbanList,
    KanbanItem,
    ButtonsContainer,
    Button,
    Modal,
    ModalContent,
    CloseButton,
    KanbanOptions,
    KanbanOption,
    ConfirmationButtons,
    ConfirmButton,
    CancelButton,
    Input
} from './HomeStyled';
import { createBoard } from '../../services/boardServices';
import { useNavigate } from 'react-router-dom';
import { useUser } from "../../Context/UserContext"

export default function Home() {
    const [kanbanList, setKanbanList] = useState([]);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [showAddModal, setShowAddModal] = useState(false);
    const [selectedKanban, setSelectedKanban] = useState(null);
    const [newKanbanTitle, setNewKanbanTitle] = useState('');

    const {user} = useUser()

    useEffect(() => {
        setKanbanList(user.boards)
    }, [])

    const navigate = useNavigate()

    const handleDeleteKanban = (item) => {
        setSelectedKanban(item);
        setShowDeleteModal(false);
        setShowConfirmModal(true);
    };

    const handleConfirmDelete = async () => {
        alert(`Excluindo: ${selectedKanban}...`);
        try {
            const response = await deleteBoard(selectedKanban._id)
            setKanbanList(kanbanList.filter(item => item !== selectedKanban));
        } catch (error) {
            console.log(error)
        }
        setShowConfirmModal(false);
    };

    const handleAddKanban = async () => {
        if (newKanbanTitle.trim()) {
            try {
                const response = await createBoard(newKanbanTitle)
                setKanbanList(...response)
            } catch (error) {
                console.log(error)
            }
            setShowAddModal(false);
            setNewKanbanTitle('');
        } else {
            alert('Por favor, insira um título para o Kanban.');
        }
    };

    return (
        <OuterContainer>
            <Container>
                <Title>Seus Kanbans</Title>
                <KanbanList id="kanbanList">
                    {kanbanList ?(
                    kanbanList.map((item, index) => (
                        <KanbanItem key={index} onClick={navigate(`/home/workarea/${selectedKanban._id}`)}>
                            <div>{item}</div>
                        </KanbanItem>
                    ))) : (
                        null
                    )}
                </KanbanList>
                <ButtonsContainer>
                    <Button className="delete-button" onClick={() => setShowDeleteModal(true)}>Excluir Kanban</Button>
                    <Button className="add-button" onClick={() => setShowAddModal(true)}>Adicionar Kanban</Button>
                </ButtonsContainer>
            </Container>

            <Modal show={showDeleteModal} id="deleteModal">
                <ModalContent>
                    <CloseButton onClick={() => setShowDeleteModal(false)}>&times;</CloseButton>
                    <h2>Excluir Kanban</h2>
                    <p>Selecione um kanban para excluir:</p>
                    <KanbanOptions id="kanbanOptions">
                        { kanbanList? (
                        kanbanList.map((item, index) => (
                            <KanbanOption key={index} onClick={() => handleDeleteKanban(item)}>
                                {item}
                            </KanbanOption>
                        ))): (
                            null
                        )}
                    </KanbanOptions>
                </ModalContent>
            </Modal>

            <Modal show={showConfirmModal} id="confirmModal">
                <ModalContent>
                    <CloseButton onClick={() => setShowConfirmModal(false)}>&times;</CloseButton>
                    <h2>Excluir Kanban</h2>
                    <p id="confirmText">Deseja excluir: {selectedKanban}?</p>
                    <ConfirmationButtons>
                        <ConfirmButton onClick={handleConfirmDelete}>Confirmar</ConfirmButton>
                        <CancelButton onClick={() => setShowConfirmModal(false)}>Cancelar</CancelButton>
                    </ConfirmationButtons>
                </ModalContent>
            </Modal>

            <Modal show={showAddModal} id="addModal">
                <ModalContent>
                    <CloseButton onClick={() => setShowAddModal(false)}>&times;</CloseButton>
                    <h2>Adicionar Kanban</h2>
                    <p>Dê um título ao seu kanban:</p>
                    <Input type="text" id="newKanbanTitle" value={newKanbanTitle} onChange={(e) => setNewKanbanTitle(e.target.value)} placeholder="Título do Kanban" />
                    <ConfirmationButtons>
                        <ConfirmButton onClick={handleAddKanban}>Criar Kanban</ConfirmButton>
                        <CancelButton onClick={() => setShowAddModal(false)}>Cancelar</CancelButton>
                    </ConfirmationButtons>
                </ModalContent>
            </Modal>
        </OuterContainer>
    );
}
