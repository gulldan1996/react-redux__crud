/* eslint-disable react/jsx-indent */
import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import {
  Drawer,
  CssBaseline,
  AppBar,
  Toolbar,
  List,
  Typography,
  Divider,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  Fab,
  Tooltip,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import AddIcon from '@material-ui/icons/Add';
import { useStyles } from './RouteNavigationUi';
import RouteTo from './Route/RouteTo';

export default function RouteNavigation() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState('List of Products');

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handlerNamePages = (e) => {
    setName(e.name);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            {name}
          </Typography>
          <Tooltip title="Add" aria-label="add" component={Link} to="/AddNewProduct">
            <Fab color="secondary" className={classes.absolute}>
              <AddIcon />
            </Fab>
          </Tooltip>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {[
            { name: 'List of Products', to: '/' }].map((item, index) => (
            <ListItem
              button
              component={Link}
              to={item.to}
              key={item.to}
              onClick={() => handlerNamePages(item, index)}
            >
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <RouteTo />
      </main>
    </div>
  );
}
