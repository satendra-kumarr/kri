'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

type ModalType = 'admission' | 'scholarship' | 'general' | 'placement';

interface ModalData {
    course?: string; // Pre-selected course if any
    type: ModalType;
    message?: string; // Initial message or context
}

interface EnquiryContextType {
    isOpen: boolean;
    modalData: ModalData;
    openModal: (data?: Partial<ModalData>) => void;
    closeModal: () => void;
}

const EnquiryContext = createContext<EnquiryContextType | undefined>(undefined);

export function EnquiryProvider({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);
    const [modalData, setModalData] = useState<ModalData>({ type: 'general' });

    const openModal = (data?: Partial<ModalData>) => {
        setModalData({
            type: 'general',
            ...data
        });
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        // Optional: Reset data after delay to allow animation to finish
        setTimeout(() => {
            setModalData({ type: 'general' });
        }, 300);
    };

    return (
        <EnquiryContext.Provider value={{ isOpen, modalData, openModal, closeModal }}>
            {children}
        </EnquiryContext.Provider>
    );
}

export function useEnquiry() {
    const context = useContext(EnquiryContext);
    if (context === undefined) {
        throw new Error('useEnquiry must be used within an EnquiryProvider');
    }
    return context;
}
