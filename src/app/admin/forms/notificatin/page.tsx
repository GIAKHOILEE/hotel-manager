"use client";

import React from "react";
import styles from "./notificatin.module.css";
export default function page() {
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <div className={styles.form_title}>Thêm Thông Báo</div>
        <label className={styles.form_label} htmlFor="content">
          Nội Dung
        </label>
        <input
          className={styles.form_ip}
          type="text"
          id="content"
          placeholder="Hôm nay mất điện"
        />
        <label className={styles.form_label} htmlFor="date">
          Ngày
        </label>
        <input className={styles.form_ip} type="date" id="date" />
        <div className={styles.btn}>Thêm</div>
      </div>
    </div>
  );
}
