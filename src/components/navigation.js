import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { Home, Event, Info } from '@mui/icons-material';
import { useRouter } from 'next/router'

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
        router.push('/events');
        break;
      case 2:
        router.push('/about');
        break;
      default:
        break;
    }
  };

  return (
    <BottomNavigation value={value} onChange={handleNavigation} showLabels>
      <BottomNavigationAction label="Home" icon={<Home />} />
      <BottomNavigationAction label="Events" icon={<Event />} />
      <BottomNavigationAction label="About" icon={<Info />} />
    </BottomNavigation>
  );
};

export default BottomNav;