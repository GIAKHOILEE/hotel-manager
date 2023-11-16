"use client";

import React from "react";
import styles from "./addroom.module.css";
export default function page() {
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <div className={styles.form_title}>Thêm Phòng</div>
        <label className={styles.form_label} htmlFor="content">
          Mô tả phòng
        </label>
        <input
          className={styles.form_ip}
          type="text"
          id="content"
          placeholder="Hôm nay mất điện"
        />
        <label className={styles.form_label} htmlFor="numroom">
          Số Phòng
        </label>
        <input
          className={styles.form_ip}
          type="text"
          id="numroom"
          placeholder="Hôm nay mất điện"
        />
        <label className={styles.form_label} htmlFor="cost">
          Chi Phí
        </label>
        <input
          className={styles.form_ip}
          type="text"
          id="cost"
          placeholder="Hôm nay mất điện"
        />
        <label className={styles.form_label} htmlFor="pay">
          Giá Phòng
        </label>
        <input
          className={styles.form_ip}
          type="text"
          id="pay"
          placeholder="Hôm nay mất điện"
        />
        <label className={styles.form_label} htmlFor="type">
          Loại Phòng
        </label>
        <input
          className={styles.form_ip}
          type="text"
          id="type"
          placeholder="Hôm nay mất điện"
        />
        <label className={styles.form_label} htmlFor="type">
          Img
        </label>
        <input type="file" />
        <div className={styles.btn}>Thêm</div>
      </div>
    </div>
  );
}
