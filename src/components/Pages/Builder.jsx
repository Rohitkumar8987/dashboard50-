import React, {useState} from 'react'
import { Collapse,Table,Dropdown ,Space } from 'antd';


const { Panel } = Collapse;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

function Builder() {
    const [selected, setSelected] = useState('all');
    const handleSelected = (value) => {
        setSelected(value)
       
      }
  const items = [
    {
      key: '1',
      label: 'Details',
    },
    {
      key: '2',
      label: 'Remove',
    },
    {
      key: '2',
      label: 'Edit',
    },
  ];
    const onChange = (key) => {
        console.log(key);
      };
      const data = []
  for (let i = 0; i <3; i++) {
    data.push(
      {
        key: i,
        name: 'Philip Marshall',
        phone: '(371)611-0042',
        email: "debra.vargas@mail.com",
        address: '841 Lakeshore Dr Port Orford, Oregon',
        type: 'Business',
        salesperson: 'George James',
        notes: 1,
       
      },
    )
  }
  const columns = [
    
    {
      title: 'Full Name'.toUpperCase(),
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Phone'.toUpperCase(),
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Email'.toUpperCase(),
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Address'.toUpperCase(),
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Type'.toUpperCase(),
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'salesPerson'.toUpperCase(),
      dataIndex: 'salesperson',
      key: 'salesperson',
    },
    {
      title: 'Notes'.toUpperCase(),
      dataIndex: 'notes',
      key: 'notes',
    },
    {
        key: 'operation',
        render: () => (
            <Dropdown
              menu={{
                items,
              }}
            >
              <span className=''style={{cursor: "pointer", fontWeight:"bolder",fontSize:"1.2rem"}}>...</span>
            </Dropdown>
         
        ),
      },
      
    ]
    
  return (
    <div className="p-3">
    <div className='p-3 bg-white'>
     <span className="fs-5 fw-bold">Builder Referral 234</span>
    </div>
    <Collapse defaultActiveKey={['1']} onChange={onChange}>
      <Panel header="Builder Name 3 " key="1"style={{fontWeight:'bold',fontSize:"1.5rem"}}>
        <p>{<Table dataSource={data} columns={columns} rowSelection={{}}/>}</p>
      </Panel>
      <Panel header="Builder Name 3" key="2" style={{fontWeight:'bold',fontSize:"1.5rem"}}>
        <p>{<Table dataSource={data} columns={columns} rowSelection={{}}/>}</p>
      </Panel>
      <Panel header="Builder Name 3" key="3"style={{fontWeight:'bold',fontSize:"1.5rem"}}>
        <p>{<Table dataSource={data} columns={columns} rowSelection={{}}/>}</p>
      </Panel>
      <Panel header="Builder Name 3" key="4"style={{fontWeight:'bold',fontSize:"1.5rem"}}>
        <p>{<Table dataSource={data} columns={columns} rowSelection={{}}/>}</p>
      </Panel>
      <Panel header="Builder Name 3" key="5"style={{fontWeight:'bold',fontSize:"1.5rem"}}>
        <p>{<Table dataSource={data} columns={columns} rowSelection={{}}/>}</p>
      </Panel>
      <Panel header="Builder Name 3" key="6"style={{fontWeight:'bold',fontSize:"1.5rem"}}>
        <p>{<Table dataSource={data} columns={columns} rowSelection={{}}/>}</p>
      </Panel>
    </Collapse>
</div>

  )
}

export default Builder