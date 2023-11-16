"use client";

import React from "react";
import styles from "./addboading.module.css";
export default function page() {
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <div className={styles.form_title}>Thêm Dãy Trọ</div>
        <label className={styles.form_label}>Khu Vực</label>
        <input
          className={styles.form_ip}
          type="text"
          placeholder="Hôm nay mất điện"
        />
        <label className={styles.form_label}>Địa Chỉ</label>
        <input
          className={styles.form_ip}
          type="text"
          placeholder="Hôm nay mất điện"
        />
        <label className={styles.form_label}>Img</label>
        <input className={styles.form_ip} type="file" />
        <div className={styles.btn}>Thêm</div>
      </div>
    </div>
  );
}
