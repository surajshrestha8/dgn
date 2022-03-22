import { Drawer, DrawerContent, DrawerSelectEvent, DrawerItem, AppBar, AppBarSection, AppBarSpacer } from '@progress/kendo-react-layout';
import { Button } from '@progress/kendo-react-buttons';
import React from 'react';
import { useState } from 'react';

const CustomItem = (props: any) => {
    const { visible, ...others } = props;
    const arrowDir = props["data-expanded"]
      ? "k-i-arrow-chevron-down"
      : "k-i-arrow-chevron-right";
  
    return (
      <React.Fragment>
        {props.visible === false ? null : (
          <DrawerItem {...others}>
            <span className={"k-icon " + props.icon} />
            <span className={"k-item-text"}>{props.text}</span>
            {props["data-expanded"] !== undefined && (
              <span
                className={"k-icon " + arrowDir}
                style={{ position: "absolute", right: 10 }}
              />
            )}
          </DrawerItem>
        )}
      </React.Fragment>
    );
  };
  
  const DrawerContainer = (props: any) => {
    const [drawerExpanded, setDrawerExpanded] = React.useState<boolean>(true);
    const [items, setItems] = React.useState<Array<any>>([
      {
        text: "Admin",
        icon: "k-i-user",
        id: 1,
        route: "/",
        ["data-expanded"]: false,
      },
      {
        text: "Create",
        icon: "k-i-plus",
        id: 10,
        parentId: 1,
      },
      { separator: true },
      {
        text: "Product",
        icon: "k-i-heart",
        id: 2,
        ["data-expanded"]: false,
        route: "/food",
      },
      {
        text: "Category",
        icon: "k-i-minus",
        id: 4,
        parentId: 2,
        route: "",
        ["data-expanded"]: false,
      },
      {
        text: "Create",
        icon: 'k-i-plus',
        id: 9,
        parentId: 4,
      },
      {
        text: "Brand",
        icon: "k-i-minus",
        id: 5,
        parentId: 2,
        route: "",
      },
      { separator: true },
      {
        text: "User",
        icon: "k-i-globe-outline",
        ["data-expanded"]: false,
        id: 3,
        route: "/travel",
      },
      {
        text: "Europe",
        icon: "k-i-minus",
        id: 6,
        parentId: 3,
        route: "/travel/europe",
      },
      {
        text: "North America",
        icon: "k-i-minus",
        id: 7,
        parentId: 3,
        route: "/travel/america",
      },
    ]);
  
    const handleClick = () => {
      setDrawerExpanded(!drawerExpanded);
    };
  
    const onSelect = (ev: DrawerSelectEvent) => {
      const currentItem = ev.itemTarget.props;
      const isParent = currentItem["data-expanded"] !== undefined;
      const nextExpanded = !currentItem["data-expanded"];
  
      const newData = items.map((item) => {
        const {
          selected,
          ["data-expanded"]: currentExpanded,
          id,
          ...others
        } = item;
        const isCurrentItem = currentItem.id === id;
        return {
          selected: isCurrentItem,
          ["data-expanded"]:
            isCurrentItem && isParent ? nextExpanded : currentExpanded,
          id,
          ...others,
        };
      });
      setItems(newData);
    };
  
    const data = items.map((item) => {
      const { parentId, ...others } = item;
      if (parentId !== undefined) {
        const parent = items.find((parent) => parent.id === parentId);
        return {
          ...others,
          visible: parent["data-expanded"],
        };
      }
      return item;
    });
  
    return (
      <div>
        <AppBar style={{ backgroundColor: '#5b8af0', color: 'white' }}>
            <AppBarSection>
                <button className="k-button k-button-md k-rounded-md k-button-flat k-button-flat-base" onClick={handleClick}>
                <span className="k-icon k-i-menu" />
                </button>
            </AppBarSection>
            <AppBarSpacer style={{ width : 8 }} />
            <AppBarSection>
                <h3 className="title">DGH-CMS</h3>
            </AppBarSection>

        </AppBar>
        <Drawer
          expanded={drawerExpanded}
          mode="push"
          width={180}
          items={data}
          item={CustomItem}
          onSelect={onSelect}
        >
          <DrawerContent>{props.children}</DrawerContent>
        </Drawer>
      </div>
    );
  };

export default DrawerContainer;