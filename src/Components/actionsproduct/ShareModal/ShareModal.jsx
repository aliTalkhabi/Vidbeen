import React from 'react';
import {
    TelegramShareButton,
    WhatsappShareButton,
    LinkedinShareButton,
    TelegramIcon,
    WhatsappIcon,
    LinkedinIcon
} from 'react-share';
import { Modal, Button } from '@mui/material';
import { memo } from 'react';
const ShareModal = memo(function sharing({ isOpen, onClose, shareUrl }) {
    const handleCopyUrl = () => {
        navigator.clipboard.writeText(shareUrl);
    };
    return (
        <Modal open={isOpen} onClose={onClose} disablePortal style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={modalStyle}>
                <h2>اشتراک گذاری محصول</h2>
                <div style={buttonContainerStyle}>
                    <TelegramShareButton url={shareUrl} onClick={!open} >
                        <TelegramIcon size={32} round />
                    </TelegramShareButton>
                    <WhatsappShareButton url={shareUrl} onClick={!open}>
                        <WhatsappIcon size={32} round />
                    </WhatsappShareButton>
                    <LinkedinShareButton url={shareUrl} onClick={!open}>
                        <LinkedinIcon size={32} round />
                    </LinkedinShareButton>
                    <Button variant="outlined" onClick={handleCopyUrl}>
                        کپی کردن لینک
                    </Button>
                </div>
            </div>
        </Modal>
    );
});
const modalStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    backgroundColor: 'white',
    borderRadius: '8px',
    outline: 'none',
    margin: 'auto',
    width: '300px',
};

const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: '20px',
    alignItems: 'center'
};
export default ShareModal