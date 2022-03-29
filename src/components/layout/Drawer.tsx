import { 
    Drawer,
    DrawerContent,
    DrawerSelectEvent,
    DrawerItem,
    AppBar,
    AppBarSection,
    AppBarSpacer,
    Breadcrumb,
    Avatar,
 } from '@progress/kendo-react-layout';
import { useAuthStore, useNotificationStore } from '../../store/app.store';
import { Fade } from '@progress/kendo-react-animation';

import { Button } from '@progress/kendo-react-buttons';
import { Notification, NotificationGroup } from '@progress/kendo-react-notification';
import { useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useBreadcrumbs } from '../../hooks/breadcrumbs';
let kendokaAvatar =
  "https://www.telerik.com/kendo-react-ui-develop/images/kendoka-react.png";

  const itemss = [
    {
      id: "home",
      text: "Home",
      iconClass: "k-i-home",
    },
    {
      id: "products",
      text: "Products",
    },
  
  ];
console.log(itemss);


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
 

    const  { breadCrumbData } = useBreadcrumbs();
    const { removeSuccess, success, message,setSuccessMessge,setSuccess } = useNotificationStore();
    const [drawerExpanded, setDrawerExpanded] = useState<boolean>(true);
    const {logout} = useAuthStore();
    const navigate = useNavigate();
    const toLogout = () => {
      logout();
      navigate('/login');
      setSuccessMessge("Logged out");
      setSuccess();
      
    }
 
    const clickCreate = () => {
      navigate(`${breadCrumbData[1]['id']}/create`);
    }
  
    useEffect(()=> {
      setTimeout(()=>{
        removeSuccess();
      },3000)
    },[success]);
    console.log(success);
    const [items, setItems] = useState<Array<any>>([
      {
        text: "Admin",
        icon: "k-i-user",
        id: 1,
        route: "/admin",
        ["data-expanded"]: false,
      },
      {
        text: "Create",
        icon: "k-i-plus",
        id: 10,
        parentId: 1,
        route: "/admin/create"
      },
      { separator: true },
      {
        text: "Product",
        icon: "k-i-heart",
        id: 2,
        ["data-expanded"]: false,
        route: "/product",
      },
      {
        text: "Category",
        icon: "k-i-minus",
        id: 4,
        parentId: 2,
        route: "/category",
        ["data-expanded"]: false,
      },
      {
        text: "Create",
        icon: 'k-i-plus',
        id: 9,
        parentId: 4,
        route: 'product/category/create',
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
        route: "/user",
      },
      {
        text: "News",
        icon: "",
        ["data-expanded"]: false,
        id: 6,
        route: "/news",
      },

    ]);
    const position = {
      topLeft: { top: 0, left: 0, alignItems: "flex-start" },
      topCenter: {  left: "50%" },
      topRight: { top: 0, right: 0, alignItems: "flex-end" },
      bottomLeft: { bottom: 0, left: 0, alignItems: "flex-start" },
      bottomCenter: { bottom: 0, left: "50%", transform: "translateX(-50%)" },
      bottomRight: { bottom: 0, right: 0, alignItems: "flex-end" },
    };

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
      navigate(ev.itemTarget.props.route);
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
        <AppBar positionMode={"sticky"} style={{ backgroundColor: '#5b8af0', color: 'white', fontFamily: 'sans-serif'}}>
            <AppBarSection>
                <button className="k-button k-button-md k-rounded-md k-button-flat k-button-flat-base" onClick={handleClick}>
                <span className="k-icon k-i-menu" />
                </button>
            </AppBarSection>
            <AppBarSpacer style={{ width : 4 }} />
            <AppBarSection>
                <h3 className="title">DGH-CMS</h3>
            </AppBarSection>
            <AppBarSpacer style={{ width: 34 }} />
            <AppBarSpacer />
            <AppBarSection>
                
                <Avatar type="image">
                  <img src={kendokaAvatar} alt="Kendo Logo" />
                </Avatar>
                <Button fillMode={"link"} style={{color:'white'}} onClick={toLogout}>Logout</Button>
            </AppBarSection>


        </AppBar>
     
        <NotificationGroup 
        style={position.topCenter} 
      >
            {success &&  (
                <Notification
                  type={{ style: "success", icon: true }}
                  closable={true}
                  style={{ width: '200px',height: '30px'}}
                  onClose={() => removeSuccess()}
                >
                  <span>{message}</span>
                </Notification>
                
              )}
  
      </NotificationGroup>

  

     
     
        <Drawer
          expanded={drawerExpanded}
          mode="push"
          width={180}
          items={data}
          item={CustomItem}
          onSelect={onSelect}
          animation={{ duration: 500 }}
          mini={true}
          style={{ height: '80vh'}}
        >
          <DrawerContent>
            <div style={{display:'flex', justifyContent: 'space-between', marginTop: '10px'}}>
              <Breadcrumb 
                data={breadCrumbData}
                style={{ color: 'black' }}
              ></Breadcrumb>
              {breadCrumbData.length===2 && 
                <Button
                  style={{ marginRight: '10px'}}
                  onClick={clickCreate}
                  themeColor={"tertiary"}
                >
                  Create
                </Button> 
              }       
            </div>
              {props.children}
          </DrawerContent>
        </Drawer>
        {/* <AppBar position="bottom" positionMode={"fixed"} style={{ justifyContent: 'center' }}>
            <AppBarSection>
                <h3 className="title">Copyright @DGH-CMS</h3>
            </AppBarSection>
        </AppBar> */}

      </div>
    );
  };
export default DrawerContainer;