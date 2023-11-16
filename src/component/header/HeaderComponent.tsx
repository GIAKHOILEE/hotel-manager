"use client";
import React, { useState } from "react";
import styles from "./HeaderComponent.module.css";
export default function HeaderComponent() {
  const [openMess, setOpenMess] = useState(false);
  return (
    <div className={styles.header}>
      <div className={styles.header_left}>
        <div>
          <img className={styles.header_icon} src="/iconMenu.png" alt="" />
        </div>
        <input
          type="text"
          className={styles.header_left_search}
          placeholder="Search"
        />
      </div>
      <div className={styles.header_right}>
        <div
          className={styles.header_right_item}
          onClick={() => {
            setOpenMess(!openMess);
          }}
        >
          <img className={styles.header_icon} src="/iconEmail.png" alt="" />
          Message
          <img className={styles.header_icon_arr} src="/iconArrow.png" alt="" />
          {openMess && (
            <div className={styles.header_right_menuchil}>
              <div className={styles.header_right_menuchil_item}>
                <img
                  src="/avatar.png"
                  alt=""
                  className={styles.header_avatar}
                />
                <div>
                  <div className={styles.header_right_menuchil_content}>
                    Cuong send you a MEssage
                  </div>
                  <div className={styles.header_right_menuchil_time}>
                    15 minutes ago
                  </div>
                </div>
              </div>
              <div className={styles.header_right_menuchil_item}>
                <img
                  src="/avatar.png"
                  alt=""
                  className={styles.header_avatar}
                />
                <div>
                  <div className={styles.header_right_menuchil_content}>
                    Cuong send you a MEssage
                  </div>
                  <div className={styles.header_right_menuchil_time}>
                    15 minutes ago
                  </div>
                </div>
              </div>
              <div className={styles.seeAllMess}> See All Message</div>
            </div>
          )}
        </div>
        <div className={styles.header_right_item}>
          <img className={styles.header_icon} src="/iconBell.png" alt="" />
          Notificatin
          <img className={styles.header_icon_arr} src="/iconArrow.png" alt="" />
        </div>
        <div className={styles.header_right_item}>
          <img className={styles.header_avatar} src="/avatar.png" alt="" />
          Message
          <img className={styles.header_icon_arr} src="/iconArrow.png" alt="" />
        </div>
      </div>
    </div>
  );
}
