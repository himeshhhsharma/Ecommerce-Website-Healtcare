import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

export default function Tabs() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
                <Box>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                        <Tab className="tab-item" label="All" value="1" sx={{ '&.Mui-selected': { color: 'black', fontWeight:'bolder' }}} />
                        <Tab className="tab-item" label="Hair Care" value="2" sx={{ '&.Mui-selected': { color: 'black', fontWeight:'bolder' }}} />
                        <Tab className="tab-item" label="Skin Care" value="3" sx={{ '&.Mui-selected': { color: 'black', fontWeight:'bolder' }}} />
                        <Tab className="tab-item" label="Health Care" value="4" sx={{ '&.Mui-selected': { color: 'black', fontWeight:'bolder'}}} />
                        <Tab className="tab-item" label="Body Care" value="5" sx={{ '&.Mui-selected': { color: 'black', fontWeight:'bolder' }}} />
                        <Tab className="tab-item" label="Sexual Wellness" value="6" sx={{ '&.Mui-selected': { color: 'black', fontWeight:'bolder' }}} />
                        <Tab className="tab-item" label="Immunity Booster" value="7" sx={{ '&.Mui-selected': {color: 'black', fontWeight:'bolder' }}} />
                    </TabList>
                </Box>
                <TabPanel className='tab-result' value="1">We have the following products for All Categories</TabPanel>
                <TabPanel className='tab-result' value="2">We have the following products for Hair Care</TabPanel>
                <TabPanel className='tab-result' value="3">We have the following products for Skin Care</TabPanel>
                <TabPanel className='tab-result' value="4">We have the following products for Health Care</TabPanel>
                <TabPanel className='tab-result' value="5">We have the following products for Body Care</TabPanel>
                <TabPanel className='tab-result' value="6">We have the following products for Sexual Wellness</TabPanel>
                <TabPanel className='tab-result' value="7">We have the following products as Immunity Booster</TabPanel>
            </TabContext>
        </Box>
    );
}
