import React from "react";
import { Modal, Collapse, Divider } from "antd";
import { StyledCollapse, ExpandIcon } from "./styles";

const { Panel } = Collapse;

const CompareSpecsModal = ({
  visible,
  onClose,
  carName,
  detailedSpecs,
  specName,
}) => {
  const specData = detailedSpecs[specName];
  return (
    <Modal
      open={visible}
      onCancel={onClose}
      footer={null}
      width={900}
      title={<b>詳細比較規格</b>}
      centered
    >
      <div style={{ fontWeight: 600, fontSize: 18, marginBottom: 16 }}>
        {specName}
      </div>
      <Divider style={{ margin: "12px 0" }} />
      <StyledCollapse
        bordered
        accordion
        defaultActiveKey={[]}
        expandIcon={({ isActive }) => (
          <ExpandIcon>{isActive ? "-" : "+"}</ExpandIcon>
        )}
      >
        {Object.entries(specData).map(([category, items]) =>
          Array.isArray(items) ? (
            <Panel header={category} key={category}>
              <ul style={{ paddingLeft: 0, listStyle: "none" }}>
                {items.map((item, idx) => (
                  <li
                    key={idx}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "4px 0",
                      borderBottom: "1px solid #f0f0f0",
                    }}
                  >
                    <span style={{ color: "#222" }}>{item.label}</span>
                    <span style={{ color: "#888" }}>{item.value}</span>
                  </li>
                ))}
              </ul>
            </Panel>
          ) : null
        )}
      </StyledCollapse>
    </Modal>
  );
};

export default CompareSpecsModal;
