import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { FaShopify } from 'react-icons/fa';
import { IoLogoYoutube } from 'react-icons/io5';
import { SiApplemusic } from 'react-icons/si';
import { FaLongArrowAltRight } from 'react-icons/fa';

interface IProject {
  image: JSX.Element;
  title: string;
  shortDescription: string;
  detail: {
    description: string;
    technology: string;
    frontend: string;
    backend: string;
    member: string;
    role: string;
    demo: string;
    github: string;
  };
}

const Project = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [dataDetail, setDataDetail] = useState<IProject | null>();
  const dataProjects: IProject[] = [
    {
      image: <FaShopify size={50} color="#0a68ff" />,
      title: 'Tiki Clone',
      shortDescription: 'Website thương mại điện tử hỗ trợ & mua bán sản phẩm công nghệ',
      detail: {
        description: '(Self-learning) Xây dựng website thương mại điện tử mua bán sản phẩm công nghệ',
        technology: 'ReactJS & NodeJS',
        frontend: 'React (Javascript), Styled components, Ant-design, Redux-toolkit, React Query',
        backend: 'NodeJS (Express), Database (MongoDB)',
        member: '1',
        role: 'Developer',
        demo: 'https://leehung-shop-ecom.vercel.app/',
        github: 'https://github.com/LeeHungQNG/shop-ecom',
      },
    },
    {
      image: <IoLogoYoutube size={50} color="#ff0000" />,
      title: 'Yotube Clone',
      shortDescription: 'Website nền tảng chia sẻ video trực tuyến',
      detail: {
        description: '(Self-learning) Website là nền tảng giúp người dùng xem và chia sẻ video trực tuyến',
        technology: 'ReactJS',
        frontend: 'React (Javascript), Material UI',
        backend: 'RapidAPI',
        member: '1',
        role: 'Developer',
        demo: 'https://leehung-yotube-clone.netlify.app/',
        github: 'https://github.com/LeeHungQNG/CloneYotube',
      },
    },
    {
      image: <SiApplemusic size={50} color="#48a842" />,
      title: 'Zingmp3 Clone',
      shortDescription: 'Website mạng xã hội chia sẻ thông tin về âm nhạc',
      detail: {
        description: '(Self-learning) Website là nền tảng giúp người dùng xem và chia sẻ video trực tuyến',
        technology: 'ReactJS',
        frontend: 'React (Javascript), Tailwind CSS',
        backend: 'NodeJS (Express)',
        member: '1',
        role: 'Developer',
        demo: 'https://leehung-yotube-clone.netlify.app/',
        github: 'https://github.com/LeeHungQNG/CloneYotube',
      },
    },
  ];

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setDataDetail(null);
  };

  return (
    <>
      <Modal
        title={dataDetail && dataDetail.title ? `Dự án ${dataDetail.title}` : ''}
        open={isModalOpen}
        onOk={() => handleCloseModal()}
        onCancel={() => handleCloseModal()}
        footer={null}
        maskClosable={false}
      >
        {dataDetail && (
          <ul>
            <li>Description: {dataDetail.detail.description}</li>
            <li>Frontend: {dataDetail.detail.frontend}</li>
            <li>Backend: {dataDetail.detail.backend}</li>
            <li>Member: {dataDetail.detail.member}</li>
            <li>Role: {dataDetail.detail.role}</li>
            <li>
              Demo:
              <a href={dataDetail.detail.demo} target="_blank">
                {dataDetail.detail.demo}
              </a>
            </li>
            <li>
              Github:
              <a href={dataDetail.detail.github} target="_blank">
                {dataDetail.detail.github}
              </a>
            </li>
          </ul>
        )}
      </Modal>
      <div className="arlo_tm_section" id="project">
        <div className="arlo_tm_services_wrap">
          <div className="container">
            <div className="arlo_tm_title_holder">
              <h3>Amazing Projects</h3>
              <span>Meet our amazing projects</span>
            </div>
            <div className="list_wrap">
              <ul>
                {dataProjects.map((item, index) => {
                  return (
                    <li key={`${index}-project`}>
                      <div
                        className="inner"
                        title="Xem chi tiết"
                        style={{ cursor: 'pointer' }}
                        onClick={() => {
                          setDataDetail(item);
                          setIsModalOpen(true);
                        }}
                      >
                        <div className="icon">
                          {/* <img className="svg" src={item.image} alt="camera-diaphragm" /> */}
                          {item.image}
                        </div>
                        <div className="title_service">
                          <h3>{item.title}</h3>
                        </div>
                        <div className="text">
                          <p>{item.shortDescription}</p>
                        </div>
                        <div className="view_detail" style={{ padding: '5px 0', display: 'flex', alignItems: 'center', gap: '4px' }}>
                          <FaLongArrowAltRight />
                          <span style={{ cursor: 'pointer' }}>Xem chi tiết</span>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
