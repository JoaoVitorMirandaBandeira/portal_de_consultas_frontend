import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { ArrowDropDown, Edit, StorageRounded } from '@mui/icons-material';

export default function ButtonMenu() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                id="fade-button"
                aria-controls={open ? 'fade-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                style={{ color: '#4D4D4D', textTransform: 'none' }}
            >
                Opções<ArrowDropDown />
            </Button>
            <Menu
                id="fade-menu"
                MenuListProps={{
                    'aria-labelledby': 'fade-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
                style={{ fontSize: 5, color: '#4D4D4D' }}
            >
                <MenuItem style={{ fontSize: 13, color: '#4D4D4D' }} onClick={handleClose}><Edit sx={{ fontSize: '21px', paddingRight: '6px' }} />Editar</MenuItem>
                <MenuItem style={{ fontSize: 13, color: '#4D4D4D' }} onClick={handleClose}><StorageRounded sx={{ fontSize: '21px', paddingRight: '6px' }} />Consultas</MenuItem>
            </Menu>
        </div>
    );
}
