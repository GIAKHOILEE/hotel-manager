"use client";

import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.dasboard}>
      <div className={styles.statistical}>
        <div className={styles.statistical_container}>
          <div className={styles.box}>
            <img className={styles.box_img} src="/GraphChart.png" alt="" />
            <div>
              <div className={styles.box_title}>Tổng Số Phòng Trọ</div>
              <div className={styles.box_parameter}>23</div>
            </div>
          </div>
          <div className={styles.box}>
            <img className={styles.box_img} src="/Chart.png" alt="" />
            <div>
              <div className={styles.box_title}>Số Phòng Trống</div>
              <div className={styles.box_parameter}>23</div>
            </div>
          </div>
          <div className={styles.box}>
            <img className={styles.box_img} src="/ChartBar.png" alt="" />
            <div>
              <div className={styles.box_title}>Số Người Thuê</div>
              <div className={styles.box_parameter}>23</div>
            </div>
          </div>
          <div className={styles.box}>
            <img className={styles.box_img} src="/PieChart.png" alt="" />
            <div>
              <div className={styles.box_title}>Tổng Tiền</div>
              <div className={styles.box_parameter}>23</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.listroom}>
        <div className={styles.listroom_title_head}>
          <div className={styles.listroom_title}>Danh sách phòng Trống</div>
          <span className={styles.listroom_showall}>Show All</span>
        </div>
        <table className={styles.listroom_table}>
          <thead>
            <tr>
              <th>STT</th>
              <th>Địa Chỉ</th>
              <th>Khu Vực</th>
              <th>Img</th>
              <th>Type</th>
              <th>Status</th>
              <th>AddImg</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>21 Tiên Sơn 17 </td>
              <td>Hải Châu </td>
              <td>
                <img src="/avatar.png" alt="Room Image" />
              </td>
              <td>Nhà trọ cấp 4</td>
              <td>
                <button className={styles.btn_empty}>Trống</button>
              </td>
              <td>
                <button className={styles.btn_add}>Add</button>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>21 Tiên Sơn 17 </td>
              <td>Hải Châu </td>
              <td>
                <img src="/avatar.png" alt="Room Image" />
              </td>
              <td>Nhà trọ cấp 4</td>
              <td>
                <button className={styles.btn_empty}>Trống</button>
              </td>
              <td>
                <button className={styles.btn_add}>Add</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
