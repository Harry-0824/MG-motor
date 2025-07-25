import React, { useState, useCallback } from "react";
import * as S from "./styles";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    carModel: "MG HS",
    dealership: "",
    otherRequests: "",
    lastName: "",
    firstName: "",
    gender: "male",
    email: "",
    phone: "",
    verificationCode: "",
    contactTime: "",
    agreeTerms: false,
  });

  const handleChange = useCallback((e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      // Handle form submission logic here
      console.log(formData);
    },
    [formData]
  );

  return (
    <S.FormContainer>
      <S.FormTitle>預約賞車/試乘</S.FormTitle>
      <S.FormMainRow>
        <S.FormLeft>
          <S.FormGroup>
            <S.Label htmlFor="carModel">賞車/試乘車款</S.Label>
            <S.Select
              id="carModel"
              name="carModel"
              value={formData.carModel}
              onChange={handleChange}
            >
              <option value="MG HS">MG HS</option>
              <option value="MG ZS">MG ZS</option>
              {/* Add other car models here */}
            </S.Select>
          </S.FormGroup>

          <S.FormGroup>
            <S.Label htmlFor="dealership">選擇預約據點</S.Label>
            <S.Select
              id="dealership"
              name="dealership"
              value={formData.dealership}
              onChange={handleChange}
            >
              <option value="">請選擇</option>
              {/* Add dealership options here */}
            </S.Select>
          </S.FormGroup>

          <S.FormGroup>
            <S.Label htmlFor="otherRequests">其他試乘需求 (選填)</S.Label>
            <S.TextArea
              id="otherRequests"
              name="otherRequests"
              value={formData.otherRequests}
              onChange={handleChange}
              placeholder="如: 需測試兒童座椅、指定銷售顧問、指定預約試乘 HS 2.0T、推薦人姓名/車牌"
            />
          </S.FormGroup>

          <S.FormRow>
            <S.FormGroup flex={1}>
              <S.Label htmlFor="lastName">姓氏</S.Label>
              <S.Input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="請輸入姓氏"
              />
            </S.FormGroup>
            <S.FormGroup flex={1}>
              <S.Label htmlFor="firstName">名字</S.Label>
              <S.Input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="請輸入名字"
              />
            </S.FormGroup>
          </S.FormRow>

          <S.FormGroup>
            <S.Label>性別</S.Label>
            <S.RadioGroup>
              <S.RadioLabel>
                <S.InputRadio
                  type="radio"
                  name="gender"
                  value="male"
                  checked={formData.gender === "male"}
                  onChange={handleChange}
                />
                先生
              </S.RadioLabel>
              <S.RadioLabel>
                <S.InputRadio
                  type="radio"
                  name="gender"
                  value="female"
                  checked={formData.gender === "female"}
                  onChange={handleChange}
                />
                女士
              </S.RadioLabel>
            </S.RadioGroup>
          </S.FormGroup>

          <S.FormGroup>
            <S.Label htmlFor="email">電子信箱</S.Label>
            <S.Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </S.FormGroup>

          <S.FormGroup>
            <S.Label htmlFor="phone">手機號碼</S.Label>
            <S.FormRow>
              <S.Input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="填寫範例: 0912345678"
                style={{ flex: "2 1 200%", marginRight: "10px" }}
              />
              <S.Button type="button" variant="outline">
                取得驗證碼
              </S.Button>
            </S.FormRow>
          </S.FormGroup>

          <S.FormGroup>
            <S.Label htmlFor="verificationCode">填寫驗證碼</S.Label>
            <S.Input
              type="text"
              id="verificationCode"
              name="verificationCode"
              value={formData.verificationCode}
              onChange={handleChange}
            />
          </S.FormGroup>

          <S.FormGroup>
            <S.Label htmlFor="contactTime">方便銷售顧問聯繫您的時段</S.Label>
            <S.Select
              id="contactTime"
              name="contactTime"
              value={formData.contactTime}
              onChange={handleChange}
            >
              <option value="">請選擇</option>
              {/* Add time slot options here */}
            </S.Select>
          </S.FormGroup>

          <S.FormGroup>
            <S.CheckboxLabel>
              <S.InputCheckbox
                type="checkbox"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleChange}
              />
              確認預約即表示您已閱讀並同意個人資料授權條款
            </S.CheckboxLabel>
          </S.FormGroup>

          <S.Button type="submit" onClick={handleSubmit}>
            確認預約
          </S.Button>

          <S.NoteText>
            請留意:
            <br /> 完成線上預約賞車後, 銷售顧問將會主動與您連繫,
            由於預約人數踴躍, 請您耐心等待, 十分感謝您的支持。
          </S.NoteText>
        </S.FormLeft>
        <S.FormRight>
          <S.CarImage src="/media/2022_HS_車款圖_灰.webp" alt="MG HS Car" />
        </S.FormRight>
      </S.FormMainRow>
    </S.FormContainer>
  );
};

export default React.memo(BookingForm);
