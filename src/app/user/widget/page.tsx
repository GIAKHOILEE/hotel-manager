"use client";
import React, { useState } from "react";
import styles from "./widget.module.css";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import dayjs from "dayjs";

export default function page() {
  return (
    <div className={styles.widget}>
      <div className={styles.statistical_container}>
        <div className={styles.box}>
          <div className={styles.box_head}>
            <div className={styles.box_head_title}>Messages</div>
            <div className={styles.box_head_showall}>Show All</div>
          </div>
          <div className={styles.box_item}>
            <img className={styles.box_item_avatar} src="/avatar.png" alt="" />
            <div className={styles.box_item_content}>
              <div className={styles.box_item_content_title}>
                <div className={styles.box_item_content_title_name}>
                  Jhon Doe
                </div>
                <div className={styles.box_item_content_title_time}>
                  15 minutes ago
                </div>
              </div>
              <div className={styles.box_item_content_text}>
                Short message goes here...
              </div>
            </div>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.box_head}>
            <div className={styles.box_head_title}>Calender</div>
            <div className={styles.box_head_showall}>Show All</div>
          </div>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer
              components={[
                "DatePicker",
                "MobileDatePicker",
                "DesktopDatePicker",
                "StaticDatePicker",
              ]}
            >
              <DemoItem>
                <StaticDatePicker defaultValue={dayjs("2022-04-17")} />
              </DemoItem>
            </DemoContainer>
          </LocalizationProvider>
        </div>
        <div className={styles.box}>
          <div className={styles.box_head}>
            <div className={styles.box_head_title}>Review Room</div>
            <div className={styles.box_head_showall}>Show All</div>
          </div>
          <div className={styles.box_item}>
            <img className={styles.box_item_avatar} src="/avatar.png" alt="" />
            <div className={styles.box_item_content}>
              <div className={styles.box_item_content_title}>
                <div className={styles.box_item_content_title_name}>
                  Jhon Doe
                </div>
                <div className={styles.box_item_content_title_time}>
                  Dương Thưởng
                </div>
              </div>
              <div className={styles.box_item_content_text}>
                Phòng đẹp, yên tĩnh, sạch sẽ, thoáng mát,...
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
