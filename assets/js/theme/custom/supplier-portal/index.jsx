import React from 'react';
import { createRoot } from 'react-dom/client';
import PageManager from '../../page-manager';
import SupplierPortal from './SupplierPortal';

export default class SupplierPortalPage extends PageManager {
    constructor(context) {
        super(context);
        this.containerSelector = '#supplier-portal-react-root';
    }

    onReady() {
        const container = document.querySelector(this.containerSelector);
        if (container) {
            const root = createRoot(container);
            root.render(<SupplierPortal />);
        }
    }
}