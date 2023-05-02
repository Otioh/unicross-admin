import React, { useState } from 'react';
import { Menu, MenuItem } from "@mui/material";
import mock from "./mockdata.json";
import {Tab, Tabs } from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEllipsis} from '@fortawesome/free-solid-svg-icons';

function Dashboard() {
      const [anchorEl, setAnchorEl] =useState()
        
      const open = Boolean(anchorEl);
      const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
      const handleClose = () => {
        setAnchorEl(null);
      };

  return (
    <>
      <div className="row">
        <Tabs defaultActiveKey={"m1"}>
          <Tab key={"m1"} eventKey={"m1"} title="Active">
            <ul className="list-group">
              {mock.data.map((data) => {
                if (data.active) {
                  return (
                    <li className="list-group-item flex between ">
                      <strong> {data.id}</strong>
                      <span> {data.fullname}</span>
                      <span> {data.phone}</span>
                      <span> {data.address}</span>
                      <span> {data.design}</span>
                      <span> {data.noCopies} Copies</span>

                      <span> {data.comment.substring(0, 22)} ...</span>

                      <span>
                        <button className="btn btn-outline-primary" onClick={handleClick}>
                          <FontAwesomeIcon icon={faEllipsis}></FontAwesomeIcon>
                        </button>
                      </span>
                    </li>
                  );
                } else {
                  return null;
                }
              })}
            </ul>
          </Tab>

          <Tab key={"m2"} eventKey={"m2"} title="Completed">
            <ul className="list-group">
              {mock.data.map((data) => {
                if (!data.active) {
                  return (
                    <li className="list-group-item flex between ">
                      <strong> {data.id}</strong>
                      <span> {data.fullname}</span>
                      <span> {data.phone}</span>
                      <span> {data.address}</span>
                      <span> {data.design}</span>
                      <span> {data.noCopies} Copies</span>

                      <span> {data.comment.substring(0, 22)} ...</span>

                      <span>
                        <button
                          className="btn btn-outline-primary"
                          onClick={handleClick}
                        >
                          <FontAwesomeIcon icon={faEllipsis}></FontAwesomeIcon>
                        </button>
                      </span>
                    </li>
                  );
                } else {
                  return null;
                }
              })}
             
            </ul>
          </Tab>

          <Tab key={"m3"} eventKey={"m3"} title="All">
            <ul className="list-group">
              {mock.data.map((data) => {
                return (
                  <li className="list-group-item flex between ">
                    <strong> {data.id}</strong>
                    <span> {data.fullname}</span>
                    <span> {data.phone}</span>
                    <span> {data.address}</span>
                    <span> {data.design}</span>
                    <span> {data.noCopies} Copies</span>

                    <span> {data.comment.substring(0, 22)} ...</span>

                    <span>
                      <button
                        className="btn btn-outline-primary"
                        onClick={handleClick}
                      >
                        <FontAwesomeIcon icon={faEllipsis}></FontAwesomeIcon>
                      </button>
                    </span>
                  </li>
                );
              })}
            
            </ul>
          </Tab>
        </Tabs>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <MenuItem>View Order</MenuItem>
          <MenuItem>
            <a href={"nbjb"}> Open File </a>
          </MenuItem>
          <MenuItem>Mark as Done</MenuItem>

          <MenuItem>Send Mail</MenuItem>

          <MenuItem>
            <a href={`tel:09060966606`}>Phone Call </a>
          </MenuItem>
        </Menu>
      </div>
    </>
  );
}

export default Dashboard