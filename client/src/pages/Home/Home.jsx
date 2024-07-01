import React, { useEffect, useState } from 'react';
import {
    Centerdiv,
    OuterContainer,
    Container,
    Title,
    KanbanList,
    ButtonsContainer,
    Button,
    Modal,
    ModalContent,
    CloseButton,
    KanbanOptions,
    ConfirmationButtons,
    ConfirmButton,
    CancelButton,
    Input
} from './HomeStyled';
import { KanbanItem } from '../../components/KanbanItem/KanbanItem';
import { createBoard, deleteBoard, getAllUserBoards } from '../../services/boardServices';
import { KanbanDelete } from '../../components/KanbanDelete/KanbanDelete';
import { useUser } from '../../Context/UserContext'

export default function Home() {
    const [kanbanList, setKanbanList] = useState([]);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [showAddModal, setShowAddModal] = useState(false);
    const [selectedKanban, setSelectedKanban] = useState(null);
    const [newKanbanTitle, setNewKanbanTitle] = useState('');

    const  {user}  = useUser()

    useEffect(() => {
        const findAllUserBoards = async () => {
            const response = await getAllUserBoards()
            setKanbanList(response)
        }
        findAllUserBoards()
    }, [])

    const handleDeleteKanban = (item) => {
        setSelectedKanban(item);
        setShowDeleteModal(false);
        setShowConfirmModal(true);
    };

    const handleConfirmDelete = async () => {
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
                if (!kanbanList){
                    setKanbanList(([response]))
                } else{
                    setKanbanList((antigaList) => [...antigaList, response])
                }
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
        user && (
            <Centerdiv>
            <OuterContainer>
                <Container>
                    <Title>Seus Kanbans</Title>
                    <KanbanList id="kanbanList">
                        {kanbanList ?(
                        kanbanList.map((item, index) => {
                            return <KanbanItem key={index} name={item.name} id={item._id}/>
                        })) : (
                            null
                        )}
                    </KanbanList>
                    <ButtonsContainer>
                        <Button className="add-button" onClick={() => setShowAddModal(true)}>Adicionar Kanban</Button>
                        <Button className="delete-button" onClick={() => setShowDeleteModal(true)}>Excluir Kanban</Button>
                    </ButtonsContainer>
                </Container>

                <Modal show={showDeleteModal} id="deleteModal">
                    <ModalContent>
                        <CloseButton onClick={() => setShowDeleteModal(false)}>&times;</CloseButton>
                        <h2>Excluir Kanban</h2>
                        <p>Selecione um kanban para excluir:</p>
                        <KanbanOptions id="kanbanOptions">
                            
                        {kanbanList ?(
                        kanbanList.map((item, index) => {
                            return <KanbanDelete key={index} name={item.name} onclick={() => handleDeleteKanban(item)}/>
                        })) : (
                            null
                        )}
                        </KanbanOptions>
                    </ModalContent>
                </Modal>

                <Modal show={showConfirmModal} id="confirmModal">
                    <ModalContent>
                        <CloseButton onClick={() => setShowConfirmModal(false)}>&times;</CloseButton>
                        <h2>Excluir Kanban</h2>
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
            </Centerdiv>)
    );
}
