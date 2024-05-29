// src/components/BottomNavigation.js
import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { Home, PeopleAlt } from '@mui/icons-material'; // Importeer de benodigde iconen
import { useRouter } from 'next/router';
import styles from '@/styles/Navigation.module.css';

const BottomNav = () => {
  const [value, setValue] = React.useState(0);
  const router = useRouter();

  const handleNavigation = (event, newValue) => {
    setValue(newValue);
    switch (newValue) {
      case 0:
        router.push('/');
        break;
      case 1:
        router.push('/characters');
        break;
      default:
        break;
    }
  };

  return (
    <BottomNavigation
      value={value}
      onChange={handleNavigation}
      showLabels
      className={styles.bottomNav}
    >
      <BottomNavigationAction label="Home" icon={<Home />} style={{ color: 'white' }} />
      <BottomNavigationAction label="Characters" icon={<PeopleAlt />} style={{ color: 'white' }} /> {/* Toegevoegde link naar "Characters" */}
    </BottomNavigation>
  );
};

export default BottomNav;
