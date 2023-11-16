"use client";

import React from "react";
import styles from "./addbill.module.css";
export default function page() {
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <div className={styles.form_title}>Thêm Hoá Đơn</div>
        <label className={styles.form_label}>Chọn Dãy trọ</label>
        <select className={styles.form_ip}>
          <option value="1" className={styles.form_select}>
            Chọn Dãy trọ
          </option>
          <option value="1" className={styles.form_select}>
            1
          </option>
          <option value="2" className={styles.form_select}>
            2
          </option>
          <option value="3" className={styles.form_select}>
            3
          </option>
        </select>
        <label className={styles.form_label}>Chọn phòng thuê</label>
        <select className={styles.form_ip}>
          <option value="1" className={styles.form_select}>
            Chọn phòng thuê
          </option>
          <option value="1" className={styles.form_select}>
            1
          </option>
          <option value="2" className={styles.form_select}>
            2
          </option>
          <option value="3" className={styles.form_select}>
            3
          </option>
        </select>
        <label className={styles.form_label}>
          Số Điện Tiêu Thụ Trong Tháng
        </label>
        <input className={styles.form_ip} type="text" placeholder="160kWh" />
        <label className={styles.form_label}>Tháng</label>
        <input className={styles.form_ip} type="date" />
        <label className={styles.form_label}>Tiền nước</label>
        <input className={styles.form_ip} type="text" placeholder="1.000 đ" />
        <label className={styles.form_label}>CHi phí khác</label>
        <input
          className={styles.form_ip}
          type="text"
          placeholder="1.000.000 đ"
        />
        <div className={styles.btn}>Thêm</div>
      </div>
    </div>
  );
}
