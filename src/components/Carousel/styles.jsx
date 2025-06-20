<<<<<<< HEAD
import styled from "styled-components";

export const Container = styled.div`
  position: relative; // 相對定位
  width: 100%; // 寬度 100%
  background-image: url(${({ bg }) => bg}); // 背景圖片
  background-size: cover; // 背景圖片完全覆蓋
  background-position: center; // 背景圖片置中
  display: flex; // 使用 flex 排版
  align-items: center; // 預設垂直置中 (適用於大螢幕)

  @media (max-width: 500px) {
    flex-direction: column; // 圖片和文字內容垂直堆疊
    align-items: center; // 可選：如果項目未佔滿寬度，則將其置中
  }
`;

export const ArrowButton = styled.button`
  position: absolute; // 絕對定位
  top: 50%; // 垂直置中
  transform: translateY(-50%); // 垂直置中輔助
  color: black; // 文字顏色黑色
  border: none; // 無邊框
  font-size: 1.5rem; // 字體大小
  padding: 0; // 無內邊距
  cursor: pointer; // 滑鼠指標為手形
  border-radius: 50%; // 圓角
  ${({ left }) =>
    left ? "left: 20px;" : "right: 20px;"} // 根據 left prop 決定左右位置
  z-index: 1;
  &::before {
    display: block;
    width: 50px;
    height: 50px;
    content: "";
  }
  &::after {
    display: block;
    content: "${({ left }) => (left ? "<" : ">")}";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #000;
    font-weight: bold;
  }

  @media (max-width: 500px) {
    display: none; // Hide arrows on small screens
  }
`;

export const TextContent = styled.div`
  position: absolute; // 絕對定位
  left: 40px; // 左邊距
  z-index: 2; // 堆疊順序
  color: #111; // 文字顏色
  @media (max-width: 500px) {
    position: static; // 行動裝置版面改為靜態定位
    text-align: left; // 文字靠左對齊
    padding: 1rem; // 增加內邊距
    width: 100%; // 寬度 100%
    left: 0; // 左邊距歸零
    margin-top: 1rem; // 增加上邊距以與圖片分隔
  }
`;

export const TitleH2 = styled.h2`
  font-size: 1.5rem; // 字體大小
  color: #111; // 文字顏色
  margin: 0 0 0.5rem 4rem; // 外邊距
  text-align: left; // 文字靠左對齊
  @media (max-width: 500px) {
    margin: 0 0 0.5rem 0; // 調整行動裝置邊距
  }
`;

export const TitleH1 = styled.h1`
  font-size: 2.2rem; // 字體大小
  color: #111; // 文字顏色
  margin: 0 0 3rem 4rem; // 外邊距
  text-align: left; // 文字靠左對齊
  @media (max-width: 500px) {
    font-size: 1.25rem; // 根據圖片調整行動裝置字體大小
    color: #000; // 根據圖片調整顏色 (黑色)
    margin: 0 0 1rem 0; // 調整行動裝置邊距
    font-weight: 600; // 如有需要可增加字體粗細
  }
`;

export const DescriptionP = styled.p`
  font-size: 1rem; // 字體大小
  line-height: 24px; // 行高
  color: #fff; // 文字顏色
  font-weight: 400; // 字體粗細
  @media (max-width: 500px) {
    color: #333; // 範例：如有需要可更改文字顏色以提高可見度
    margin-top: 0.5rem; // 在描述上方增加一些空間
  }
`;

export const LinkButton = styled.a`
  display: flex; // 使用 flex 排版
  align-items: center; // 垂直置中
  justify-content: space-between; // 保持箭頭在兩側
  position: absolute; // 絕對定位
  left: 6.5rem; // 左邊距
  top: 55%; // 上邊距
  width: 220px; // 寬度
  height: 56px; // 高度
  background: #fff; // 背景顏色
  color: #111; // 文字顏色
  padding: 0 24px; // 內邊距
  text-decoration: none; // 無文字裝飾
  border-radius: 0; // 無圓角
  font-weight: 600; // 字體粗細
  font-size: 1.2rem; // 字體大小
  border: 2px solid #111; // 邊框
  border-right: 6px solid #e10012; // 右邊框
  box-sizing: border-box; // 盒模型
  transition: border-color 0.2s; // 邊框顏色過渡效果
  letter-spacing: 1px; // 字間距
  &:hover {
    border-color: #c00; // 滑鼠懸停時邊框顏色
    color: #c00; // 滑鼠懸停時文字顏色
    text-decoration: none; /* 保持 hover 時無下底線 */
  }
  span {
    font-size: 1.5em; // 字體大小
    color: #888; // 文字顏色
    transition: color 0.2s; // 文字顏色過渡效果
    text-decoration: none; // 無文字裝飾
  }
  &:hover span {
    color: #c00; // 滑鼠懸停時 span 文字顏色
    text-decoration: none; /* 保持 hover 時無下底線 */
  }
  @media (max-width: 500px) {
    position: static; // 行動裝置版面改為靜態定位
    width: 150px; // 根據圖片調整寬度 (基於內容)
    max-width: 150px; // 進一步縮小最大寬度以獲得更小的按鈕
    height: 35px; // 進一步縮小高度以獲得更小的按鈕
    font-size: 0.75rem; // 進一步縮小字體大小以獲得更小的按鈕
    padding: 0 10px; // 進一步縮小內邊距以獲得更小的按鈕
    border: 1px solid #000; // 根據圖片設定邊框
    border-right: 3px solid #e10012; // 調整右邊框以獲得更小的按鈕
    color: #000; // 根據圖片設定文字顏色
    margin-top: 0.5rem; // 增加一些邊距
    justify-content: center; // 將文字和箭頭在按鈕中置中
    span {
      display: inline; // 使箭頭可見
      font-size: 1.2em; // 相對於按鈕字體大小調整箭頭大小
      margin-left: 5px; // 在文字和箭頭之間增加空間
      // 箭頭顏色將繼承預設 span 樣式 (#888)
    }
  }
`;

export const DotsWrapper = styled.div`
  display: flex; // 使用 flex 排版
  justify-content: flex-start; // 根據圖片靠左對齊
  align-items: center; // 垂直置中
  gap: 8px; // 根據圖片調整間距
  position: static; // 行動裝置版面改為靜態定位
  // 移除行動裝置的絕對定位
  // left: 50%;
  // bottom: 1rem;
  // transform: translateX(-50%);
  z-index: 2; // 堆疊順序
  padding: 1rem 0; // 增加內邊距以與按鈕分隔
  margin-left: 0; // 與文字內容對齊

  @media (min-width: 501px) {
    // 桌機版樣式
    position: absolute; // 絕對定位
    left: 50%; // 水平置中
    bottom: 1rem; // 底部邊距
    transform: translateX(-50%); // 水平置中輔助
    gap: 30px; // 間距
    justify-content: center; // 水平置中
  }
`;

export const Dot = styled.button`
  width: 70px; // 寬度
  height: 5px; // 高度
  background: #e0e0e0; // 背景顏色
  border: none; // 無邊框
  border-radius: 2px; // 圓角
  cursor: pointer; // 滑鼠指標為手形
  padding: 0; // 無內邊距
  outline: none; // 無外框線
  transition: background 0.2s; // 背景顏色過渡效果
  &.active {
    background: #c00; // 啟用狀態的點點顏色 (根據圖片為紅色)
  }
  @media (max-width: 500px) {
    width: 30px; // 根據圖片調整點點寬度
    height: 4px; // 根據圖片調整點點高度
  }
`;
=======
import styled from "styled-components";

export const Container = styled.div`
  position: relative; // 相對定位
  width: 100%; // 寬度 100%
  background-image: url(${({ bg }) => bg}); // 背景圖片
  background-size: cover; // 背景圖片完全覆蓋
  background-position: center; // 背景圖片置中
  display: flex; // 使用 flex 排版
  align-items: center; // 預設垂直置中 (適用於大螢幕)

  @media (max-width: 500px) {
    flex-direction: column; // 圖片和文字內容垂直堆疊
    align-items: center; // 可選：如果項目未佔滿寬度，則將其置中
  }
`;

export const ArrowButton = styled.button`
  position: absolute; // 絕對定位
  top: 50%; // 垂直置中
  transform: translateY(-50%); // 垂直置中輔助
  color: black; // 文字顏色黑色
  border: none; // 無邊框
  font-size: 1.5rem; // 字體大小
  padding: 0; // 無內邊距
  cursor: pointer; // 滑鼠指標為手形
  border-radius: 50%; // 圓角
  ${({ left }) =>
    left ? "left: 20px;" : "right: 20px;"} // 根據 left prop 決定左右位置
  z-index: 1; // 堆疊順序
  &::before {
    display: block; // 顯示為區塊
    width: 50px; // 寬度
    height: 50px; // 高度
    content: ""; // 內容為空 (用於點擊區域)
  }
  &::after {
    display: block; // 顯示為區塊
    ${({ left }) =>
      left ? `content: "<"` : `content: ">"`} // 根據 left prop 顯示左右箭頭
    position: absolute; // 絕對定位
    top: 50%; // 垂直置中
    left: 50%; // 水平置中
    transform: translate(-50%, -50%); // 水平垂直置中輔助
  }

  @media (max-width: 500px) {
    display: none; // 在小螢幕上隱藏箭頭
  }
`;

export const TextContent = styled.div`
  position: absolute; // 絕對定位
  left: 40px; // 左邊距
  z-index: 2; // 堆疊順序
  color: #111; // 文字顏色
  @media (max-width: 500px) {
    position: static; // 行動裝置版面改為靜態定位
    text-align: left; // 文字靠左對齊
    padding: 1rem; // 增加內邊距
    width: 100%; // 寬度 100%
    left: 0; // 左邊距歸零
    margin-top: 1rem; // 增加上邊距以與圖片分隔
  }
`;

export const TitleH2 = styled.h2`
  font-size: 1.5rem; // 字體大小
  color: #111; // 文字顏色
  margin: 0 0 0.5rem 4rem; // 外邊距
  text-align: left; // 文字靠左對齊
  @media (max-width: 500px) {
    margin: 0 0 0.5rem 0; // 調整行動裝置邊距
  }
`;

export const TitleH1 = styled.h1`
  font-size: 2.2rem; // 字體大小
  color: #111; // 文字顏色
  margin: 0 0 3rem 4rem; // 外邊距
  text-align: left; // 文字靠左對齊
  @media (max-width: 500px) {
    font-size: 1.25rem; // 根據圖片調整行動裝置字體大小
    color: #000; // 根據圖片調整顏色 (黑色)
    margin: 0 0 1rem 0; // 調整行動裝置邊距
    font-weight: 600; // 如有需要可增加字體粗細
  }
`;

export const DescriptionP = styled.p`
  font-size: 1rem; // 字體大小
  line-height: 24px; // 行高
  color: #fff; // 文字顏色
  font-weight: 400; // 字體粗細
  @media (max-width: 500px) {
    color: #333; // 範例：如有需要可更改文字顏色以提高可見度
    margin-top: 0.5rem; // 在描述上方增加一些空間
  }
`;

export const LinkButton = styled.a`
  display: flex; // 使用 flex 排版
  align-items: center; // 垂直置中
  justify-content: space-between; // 保持箭頭在兩側
  position: absolute; // 絕對定位
  left: 6.5rem; // 左邊距
  top: 55%; // 上邊距
  width: 220px; // 寬度
  height: 56px; // 高度
  background: #fff; // 背景顏色
  color: #111; // 文字顏色
  padding: 0 24px; // 內邊距
  text-decoration: none; // 無文字裝飾
  border-radius: 0; // 無圓角
  font-weight: 600; // 字體粗細
  font-size: 1.2rem; // 字體大小
  border: 2px solid #111; // 邊框
  border-right: 6px solid #e10012; // 右邊框
  box-sizing: border-box; // 盒模型
  transition: border-color 0.2s; // 邊框顏色過渡效果
  letter-spacing: 1px; // 字間距
  &:hover {
    border-color: #c00; // 滑鼠懸停時邊框顏色
    color: #c00; // 滑鼠懸停時文字顏色
    text-decoration: none; /* 保持 hover 時無下底線 */
  }
  span {
    font-size: 1.5em; // 字體大小
    color: #888; // 文字顏色
    transition: color 0.2s; // 文字顏色過渡效果
    text-decoration: none; // 無文字裝飾
  }
  &:hover span {
    color: #c00; // 滑鼠懸停時 span 文字顏色
    text-decoration: none; /* 保持 hover 時無下底線 */
  }
  @media (max-width: 500px) {
    position: static; // 行動裝置版面改為靜態定位
    width: 150px; // 根據圖片調整寬度 (基於內容)
    max-width: 150px; // 進一步縮小最大寬度以獲得更小的按鈕
    height: 35px; // 進一步縮小高度以獲得更小的按鈕
    font-size: 0.75rem; // 進一步縮小字體大小以獲得更小的按鈕
    padding: 0 10px; // 進一步縮小內邊距以獲得更小的按鈕
    border: 1px solid #000; // 根據圖片設定邊框
    border-right: 3px solid #e10012; // 調整右邊框以獲得更小的按鈕
    color: #000; // 根據圖片設定文字顏色
    margin-top: 0.5rem; // 增加一些邊距
    justify-content: center; // 將文字和箭頭在按鈕中置中
    span {
      display: inline; // 使箭頭可見
      font-size: 1.2em; // 相對於按鈕字體大小調整箭頭大小
      margin-left: 5px; // 在文字和箭頭之間增加空間
      // 箭頭顏色將繼承預設 span 樣式 (#888)
    }
  }
`;

export const DotsWrapper = styled.div`
  display: flex; // 使用 flex 排版
  justify-content: flex-start; // 根據圖片靠左對齊
  align-items: center; // 垂直置中
  gap: 8px; // 根據圖片調整間距
  position: static; // 行動裝置版面改為靜態定位
  // 移除行動裝置的絕對定位
  // left: 50%;
  // bottom: 1rem;
  // transform: translateX(-50%);
  z-index: 2; // 堆疊順序
  padding: 1rem 0; // 增加內邊距以與按鈕分隔
  margin-left: 0; // 與文字內容對齊

  @media (min-width: 501px) {
    // 桌機版樣式
    position: absolute; // 絕對定位
    left: 50%; // 水平置中
    bottom: 1rem; // 底部邊距
    transform: translateX(-50%); // 水平置中輔助
    gap: 30px; // 間距
    justify-content: center; // 水平置中
  }
`;

export const Dot = styled.button`
  width: 70px; // 寬度
  height: 5px; // 高度
  background: #e0e0e0; // 背景顏色
  border: none; // 無邊框
  border-radius: 2px; // 圓角
  cursor: pointer; // 滑鼠指標為手形
  padding: 0; // 無內邊距
  outline: none; // 無外框線
  transition: background 0.2s; // 背景顏色過渡效果
  &.active {
    background: #c00; // 啟用狀態的點點顏色 (根據圖片為紅色)
  }
  @media (max-width: 500px) {
    width: 30px; // 根據圖片調整點點寬度
    height: 4px; // 根據圖片調整點點高度
  }
`;
>>>>>>> c3f00afbd6efd9d528a63a1926a16e208bc8ddb9
