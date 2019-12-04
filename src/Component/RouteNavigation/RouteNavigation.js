/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-indent */
import React from 'react';
import clsx from 'clsx';
import { useStyles } from './RouteNavigationUi';
import { RouteTo } from './RouteTo';
import { AppBarView } from '../../View/AppBarView';
import { DrawerView } from '../../View/DrawerView';

export default function RouteNavigation() {
  const classes = useStyles();
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
      <AppBarView
        name={name}
        handleDrawerOpen={handleDrawerOpen}
        open={open}
      />
      <DrawerView
        open={open}
        handleDrawerClose={handleDrawerClose}
        handlerNamePages={handlerNamePages}
      />
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
