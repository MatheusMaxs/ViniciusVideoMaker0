import React, { useEffect } from 'react';
import { X, Play } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export function Modal({ isOpen, onClose, title, children }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/50 modal-overlay z-50 flex items-center justify-center p-4"
      onClick={onClose}
      data-testid="modal-overlay"
    >
      <div 
        className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
        data-testid="modal-content"
      >
        <div className="p-6 border-b border-notion-border flex justify-between items-center">
          <h3 className="text-xl font-semibold text-notion-text" data-testid="modal-title">
            {title}
          </h3>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg hover:bg-gray-100 flex items-center justify-center transition-colors"
            data-testid="button-close-modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
}

interface PortfolioModalProps {
  isOpen: boolean;
  onClose: () => void;
  client: string;
  description: string;
}

export function PortfolioModal({ isOpen, onClose, client, description }: PortfolioModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title={client}>
      <div className="space-y-4" data-testid="portfolio-modal-content">
        <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Play className="w-6 h-6 text-gray-700" />
            </div>
            <p className="text-gray-600">Vídeo do projeto será carregado aqui</p>
          </div>
        </div>
        <div className="text-gray-600" data-testid="text-project-description">
          {description}
        </div>
      </div>
    </Modal>
  );
}
