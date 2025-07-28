import React, { useState } from "react";
import {
  PageContainer,
  MainContainer,
  HeaderSection,
  Title,
  Description,
  FormContainer,
  FormCard,
  SectionTitle,
  FormGrid,
  FormGroup,
  Label,
  OptionalText,
  Input,
  SelectContainer,
  Select,
  SelectIcon,
  TextArea,
  SubSectionTitle,
  ButtonContainer,
  SubmitButton,
  NoteText,
} from "./styles";
import { ChevronDown } from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    lastName: "",
    firstName: "",
    phone: "",
    email: "",
    city: "請選擇",
    dealership: "請選擇",
    inquiryType: "購車服務（如賞車/購車）",
    inquirySource: "請選擇",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <PageContainer>
      {/* Main Content */}
      <MainContainer>
        <HeaderSection>
          <Title>聯絡我們</Title>
          <Description>請填寫您的聯絡資訊及詢問需求。</Description>
          <Description>若有其他問題請洽客服專線：0800-039-580</Description>
        </HeaderSection>

        <FormContainer>
          <FormCard>
            <SectionTitle>基本資料</SectionTitle>

            {/* Name fields */}
            <FormGrid>
              <FormGroup>
                <Label>姓氏</Label>
                <Input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="請輸入姓氏"
                />
              </FormGroup>
              <FormGroup>
                <Label>名字</Label>
                <Input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="請輸入名字"
                />
              </FormGroup>
            </FormGrid>

            {/* Phone and Email */}
            <FormGrid>
              <FormGroup>
                <Label>手機號碼</Label>
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="手機號碼：0912345678"
                />
              </FormGroup>
              <FormGroup>
                <Label>電子信箱</Label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="請輸入電子信箱"
                />
              </FormGroup>
            </FormGrid>

            <NoteText>如您是MG的車主，請提供以下資料以加快處理速度</NoteText>

            {/* City and Dealership */}
            <FormGrid>
              <FormGroup>
                <Label>
                  縣市 <OptionalText>(選填)</OptionalText>
                </Label>
                <SelectContainer>
                  <Select
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                  >
                    <option>請選擇</option>
                    <option>台北市</option>
                    <option>新北市</option>
                    <option>桃園市</option>
                    <option>台中市</option>
                    <option>台南市</option>
                    <option>高雄市</option>
                  </Select>
                  <SelectIcon />
                </SelectContainer>
              </FormGroup>
              <FormGroup>
                <Label>
                  車商據點 <OptionalText>(選填)</OptionalText>
                </Label>
                <Input
                  type="text"
                  name="dealership"
                  value={formData.dealership}
                  onChange={handleInputChange}
                  placeholder="請輸入車商據點"
                />
              </FormGroup>
            </FormGrid>

            <SubSectionTitle>意見反映</SubSectionTitle>

            <FormGroup style={{ marginBottom: "1.5rem" }}>
              <Label>請選擇問題類別</Label>
              <SelectContainer>
                <Select
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleInputChange}
                >
                  <option>購車服務（如賞車/購車）</option>
                  <option>售後服務</option>
                  <option>保養維修</option>
                  <option>其他</option>
                </Select>
                <SelectIcon />
              </SelectContainer>
            </FormGroup>

            <FormGroup style={{ marginBottom: "1.5rem" }}>
              <Label>請選擇會查看的 MG 網站</Label>
              <SelectContainer>
                <Select
                  name="inquirySource"
                  value={formData.inquirySource}
                  onChange={handleInputChange}
                >
                  <option>請選擇</option>
                  <option>MG Taiwan 官網</option>
                  <option>MG Facebook</option>
                  <option>MG Instagram</option>
                  <option>其他</option>
                </Select>
                <SelectIcon />
              </SelectContainer>
            </FormGroup>

            <FormGroup style={{ marginBottom: "2rem" }}>
              <Label>內容</Label>
              <TextArea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="請輸入問題內容"
                rows={6}
              />
            </FormGroup>

            <ButtonContainer>
              <SubmitButton onClick={handleSubmit}>送出</SubmitButton>
            </ButtonContainer>
          </FormCard>
        </FormContainer>
      </MainContainer>
    </PageContainer>
  );
};

export default ContactPage;
