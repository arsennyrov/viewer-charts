import { Button, Modal, Select } from "antd";
import { useState } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { burg, mint, peach, purp, sunset } from "../../colors";
import { dataSource } from "../../data";
import Charts from "../../features/Charts"
import { addNewChart, deleteChart, editChart, selectCharts } from "../../features/Charts/chartsSlice";

import './Settings.css'

const { Option } = Select;

  const Settings = () => {  
    const dispatch = useAppDispatch();
    const charts = useAppSelector(selectCharts);

    const chartColorMap: any = new Map([
      ["burg", burg],
      ["peach", peach],
      ["mint", mint],
      ["purp", purp],
      ["sunset", sunset],
    ]);

    const [activeId, setActiveId] = useState<string>();

    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  
    const [newChartColor, setNewChartColor] = useState(burg);
    const [newChartType, setNewChartType] = useState("pie");
  
    const showAddModal = () => {
      setIsAddModalOpen(true);
    };
  
    const handleAdd = () => {
      dispatch(
        addNewChart({
          type: newChartType,
          color: newChartColor,
          id: `${charts.length + 1}`,
          active: false,
        })
      );
      setIsAddModalOpen(false);
    };
  
    const handleAddCancel = () => {
      setIsAddModalOpen(false);
    };
  
    const showEditModal = () => {
      setIsEditModalOpen(true);
    };
  
    const handleEdit = () => {
      dispatch(
        editChart({ type: newChartType, color: newChartColor, activeId })
      );
      setIsEditModalOpen(false);
    };
  
    const handleEditCancel = () => {
      setIsEditModalOpen(false);
    };
  
    return (
      <div className="settings">
        <div className="charts__button-wrapper">
          <Button
            disabled={activeId === undefined}
            onClick={() => {
              dispatch(deleteChart(activeId))
              setActiveId(undefined)
            }}
          >
            Удалить график
          </Button>
          <Button disabled={activeId === undefined} onClick={showEditModal}>Настроить график</Button>
          <Button onClick={showAddModal}>Добавить график</Button>
        </div>
        <Modal
          title="Добавить график"
          open={isAddModalOpen}
          onOk={handleAdd}
          onCancel={handleAddCancel}
          okText="Добавить"
          cancelText="Отмена"
        >
          <div className="charts__modal-select-wrapper">
            <p className="charts__modal-select-description">
              Выберите тип графика
            </p>
            <Select
              style={{ width: "200px" }}
              defaultValue="pie"
              onChange={(value) => {
                return setNewChartType(value);
              }}
            >
              <Option value="pie">pie</Option>
              <Option value="column">column</Option>
              <Option value="spline">spline</Option>
              <Option value="area">area</Option>
            </Select>
          </div>
          <div className="charts__modal-select-wrapper">
            <p className="charts__modal-select-description">
              Выберите цвет графика
            </p>
            <Select
              style={{ width: "200px" }}
              defaultValue="burg"
              onChange={(value) => {
                return setNewChartColor(chartColorMap.get(value));
              }}
            >
              <Option value="burg">burg</Option>
              <Option value="peach">peach</Option>
              <Option value="mint">mint</Option>
              <Option value="purp">purp</Option>
              <Option value="sunset">sunset</Option>
            </Select>
          </div>
        </Modal>
        <Modal
          title="Редактировать график"
          open={isEditModalOpen}
          onOk={handleEdit}
          onCancel={handleEditCancel}
          okText="Применить"
          cancelText="Отмена"
        >
          <div className="charts__modal-select-wrapper">
            <p className="charts__modal-select-description">
              Выберите тип графика
            </p>
            <Select
              style={{ width: "200px" }}
              defaultValue="pie"
              onChange={(value) => {
                console.log("Tvalue", value);
                return setNewChartType(value);
              }}
            >
              <Option value="pie">pie</Option>
              <Option value="column">column</Option>
              <Option value="spline">spline</Option>
              <Option value="area">area</Option>
            </Select>
          </div>
          <div className="charts__modal-select-wrapper">
            <p className="charts__modal-select-description">
              Выберите цвет графика
            </p>
            <Select
              style={{ width: "200px" }}
              defaultValue="burg"
              onChange={(value) => {
                console.log("Cvalue", value);
                return setNewChartColor(chartColorMap.get(value));
              }}
            >
              <Option value="burg">burg</Option>
              <Option value="peach">peach</Option>
              <Option value="mint">mint</Option>
              <Option value="purp">purp</Option>
              <Option value="sunset">sunset</Option>
            </Select>
          </div>
        </Modal>
          <Charts chartHeight="200px" grid={true} activeId={activeId} onActiveIdChange={setActiveId} dataSource={dataSource} />
      </div>
    );
  };

export default Settings;
