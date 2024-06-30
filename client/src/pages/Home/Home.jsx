import React, { useState } from 'react';
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
} from './KanbanStyled';

export default function Home() {
    const [kanbanList, setKanbanList] = useState([]);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [showAddModal, setShowAddModal] = useState(false);
    const [selectedKanban, setSelectedKanban] = useState(null);
    const [newKanbanTitle, setNewKanbanTitle] = useState('');

    const handleDeleteKanban = (item) => {
        setSelectedKanban(item);
        setShowDeleteModal(false);
        setShowConfirmModal(true);
    };

    const handleConfirmDelete = () => {
        alert(`Excluindo: ${selectedKanban}...`);
        setKanbanList(kanbanList.filter(item => item !== selectedKanban));
        setShowConfirmModal(false);
    };

    const handleAddKanban = () => {
        if (newKanbanTitle.trim()) {
            setKanbanList([...kanbanList, newKanbanTitle.trim()]);
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
                    {kanbanList.map((item, index) => (
                        <KanbanItem key={index} onClick={() => alert(`Entrando em: ${item}...`)}>
                            <div>{item}</div>
                        </KanbanItem>
                    ))}
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
                        {kanbanList.map((item, index) => (
                            <KanbanOption key={index} onClick={() => handleDeleteKanban(item)}>
                                {item}
                            </KanbanOption>
                        ))}
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
