import "./Recruit.css";
import React, { useState } from "react";
import { AiOutlineRight, AiFillTrophy } from "react-icons/ai";
import { BiRun, BiTimer } from "react-icons/bi";
import {
  HiLightBulb,
  HiOutlinePresentationChartBar,
  HiOutlineLightBulb,
} from "react-icons/hi";
import { GiTeamIdea } from "react-icons/gi";
import { BsPersonCheckFill, BsPlus } from "react-icons/bs";
import { RiCustomerService2Fill } from "react-icons/ri";
import { ImManWoman } from "react-icons/im";
import { GoLaw } from "react-icons/go";
import { FaFileInvoiceDollar, FaSearchDollar } from "react-icons/fa";

function Recruit() {
  const [content, setContent] = useState(5);
  const recruitList = [
    {
      id: 1,
      title: "2021년 신입사원 채용 (설비관리, 회계부문)",
      startDate: "2021.05.21",
      endDate: "2021.05.29",
      link: "https://www.naver.com",
    },
    {
      id: 2,
      title: "2021년 경력사원 채용 (설비관리, 회계부문)",
      startDate: "2021.05.29",
      endDate: "2021.06.29",
      link: "https://www.daum.net",
    },
  ];
  return (
    <div className="recruit-container">
      <div className="recruit-sub-header">
        <div
          className={`recruit-sub-header-menu ${
            content === 1 ? "clicked" : ""
          }`}
          onClick={() => setContent(1)}
        >
          인재상
        </div>
        <div
          className={`recruit-sub-header-menu ${
            content === 2 ? "clicked" : ""
          }`}
          onClick={() => setContent(2)}
        >
          인재육성
        </div>
        <div
          className={`recruit-sub-header-menu ${
            content === 3 ? "clicked" : ""
          }`}
          onClick={() => setContent(3)}
        >
          복리후생
        </div>
        <div
          className={`recruit-sub-header-menu ${
            content === 4 ? "clicked" : ""
          }`}
          onClick={() => setContent(4)}
        >
          직무소개
        </div>
        <div
          className={`recruit-sub-header-menu ${
            content === 5 ? "clicked" : ""
          }`}
          onClick={() => setContent(5)}
        >
          채용공고
        </div>
      </div>
      <div className="recruit-contents">
        {content === 5 && (
          <>
            <div className="recruit-infomation-container">
              <div className="recruit-infomation-main-title">
                모베이스 오토테크와 21세기 자동차 전자부품 산업의 미래를 함께
                열어갈
                <br />
                <div className="color-blue">
                  젊고 유능한 인재들의 도전을 환영합니다.
                </div>
              </div>

              <div className="recruit-infomation-title-line" />
              <div className="recruit-infomation-title">채용공고</div>
              <div className="recruit-infomation-table">
                <div className="recruit-infomation-table-top">
                  <div className="recruit-infomation-table-top-title recruit-infomation-table-top-1">
                    제목
                  </div>
                  <div className="recruit-infomation-table-top-title recruit-infomation-table-top-2">
                    접수기간
                  </div>
                  <div className="recruit-infomation-table-top-title recruit-infomation-table-top-3">
                    마감일
                  </div>
                </div>
                {recruitList.map((data) => {
                  return (
                    <div className="recruit-infomation-table-body">
                      <a
                        className="recruit-infomation-table-body-title recruit-infomation-table-top-1"
                        href={data.link}
                        target="_blank"
                      >
                        {data.title}
                      </a>
                      <div className="recruit-infomation-table-body-title recruit-infomation-table-top-2">
                        {data.startDate}
                      </div>
                      <div className="recruit-infomation-table-body-title recruit-infomation-table-top-3">
                        {data.endDate}
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="recruit-infomation">
                <a
                  href="mailto:recruit@mobase-autotech.com?subject=상반기 모베이스 오토테크 신입사원 지원&body=상반기 모베이스 오토테크 신입사원 지원 서류입니다."
                  className="recruit-email-btn"
                >
                  이메일 지원하기
                </a>
              </div>
              <div className="recruit-infomation-flex">
                <div>
                  <div className="recruit-infomation-title-line" />
                  <div className="recruit-infomation-title">채용시기</div>
                </div>
                <div className="recruit-infomation-flex-article">
                  <b>· 정기 채용</b> : 그룹 공채 (매년초)
                  <br />
                  <b>· 수시 채용</b> : 필요시 채용 실시 (별도 공지)
                </div>
              </div>
              <div className="recruit-devide-line" />
              <div className="recruit-infomation-flex">
                <div>
                  <div className="recruit-infomation-title-line" />
                  <div className="recruit-infomation-title">채용절차</div>
                </div>
                <div className="recruit-infomation-flex-article">
                  모든 채용의 전형절차는 다음과 같습니다.
                </div>
              </div>
              <div className="recruit-infomation-process-container">
                <div className="recruit-infomation-process-cicle recruit-infomation-process-cicle-color-1">
                  채용공고
                </div>
                <AiOutlineRight className="recruit-infomation-process-icon" />
                <div className="recruit-infomation-process-cicle recruit-infomation-process-cicle-color-2">
                  입사지원
                </div>
                <AiOutlineRight className="recruit-infomation-process-icon" />
                <div className="recruit-infomation-process-cicle recruit-infomation-process-cicle-color-3">
                  서류전형
                </div>
                <AiOutlineRight className="recruit-infomation-process-icon" />
                <div className="recruit-infomation-process-cicle recruit-infomation-process-cicle-color-4">
                  인/적성
                  <br />
                  검사
                </div>
                <AiOutlineRight className="recruit-infomation-process-icon" />
                <div className="recruit-infomation-process-cicle recruit-infomation-process-cicle-color-5">
                  면접/건강
                  <br />
                  검사
                </div>
                <AiOutlineRight className="recruit-infomation-process-icon" />
                <div className="recruit-infomation-process-cicle recruit-infomation-process-cicle-color-6">
                  입사 및 OJT
                </div>
              </div>
              <div className="recruit-devide-line" />
              <div className="recruit-infomation-flex">
                <div>
                  <div className="recruit-infomation-title-line" />
                  <div className="recruit-infomation-title">공통사항</div>
                </div>
                <div className="recruit-infomation-flex-article">
                  · 4년제 정규대학 기졸업자 및 졸업 예정자
                  <br />
                  · 미국, 일본, 중국, 유럽, 호주 등 지역에서 3년 이상 거주자
                  우대
                  <br />
                  · 영어, 일어, 중국어, 비즈니스 회화 가능자 우대
                  <br />· 해외여행 및 파견에 결격사유가 없는 자
                </div>
              </div>
              <div className="recruit-devide-line" />
              <div className="recruit-infomation-flex">
                <div>
                  <div className="recruit-infomation-title-line" />
                  <div className="recruit-infomation-title">제출서류</div>
                </div>
                <div className="recruit-infomation-flex-article">
                  · 이력서
                  <br />
                  · 자기소개서
                  <br />
                  · 경력기술서 (경력자에 한함)
                  <br />
                  · 졸업(예정) 증명서 1부
                  <br />
                  · 최종학교 성적증명서 1부
                  <br />
                  · 외국어 검증시험 성적표 (TOEIC, JPT, HSK 등) 사본 1부
                  (해당자에 한함)
                  <br />
                  · 자격증 사본 1부 (해당자에 한함)
                  <br />
                  &nbsp;&nbsp;- 1차 실무 면접 진행시 제출
                </div>
              </div>

              <div className="recruit-infomation-flex">
                <div>
                  <div className="recruit-infomation-title-line" />
                  <div className="recruit-infomation-title">기타사항</div>
                </div>
                <div className="recruit-infomation-flex-article">
                  문의처 : 인사노무팀 ☎ 031-5174-3055, 3058
                </div>
              </div>
            </div>
          </>
        )}
        {content === 1 && (
          <div className="recruit-infomation-container">
            <div className="recruit-infomation-main-title">
              인재에 대한 관심, 존중, 배려가 위대한 기업을 만듭니다.
              <br />
              <div className="color-blue">
                모베이스 오토테크의 성장동력은 바로 사람입니다.
              </div>
            </div>
            <div className="recruit-devide-line" />
            <div className="recruit-talent-icon-section">
              <div className="recruit-talent-icon-container">
                <div className="recruit-talent-icon-box">
                  <BiRun className="recruit-talent-icon" />
                </div>
                <div className="recruit-talent-icon-title">열정</div>
                <div className="recruit-talent-icon-sub-title">Passion</div>
              </div>
              <div className="recruit-talent-icon-container">
                <div className="recruit-talent-icon-box">
                  <HiLightBulb className="recruit-talent-icon" />
                </div>
                <div className="recruit-talent-icon-title">창의와 혁신</div>
                <div className="recruit-talent-icon-sub-title">
                  Creativity & Innovation
                </div>
              </div>
              <div className="recruit-talent-icon-container">
                <div className="recruit-talent-icon-box">
                  <GiTeamIdea className="recruit-talent-icon" />
                </div>
                <div className="recruit-talent-icon-title">팀워크</div>
                <div className="recruit-talent-icon-sub-title">Teamwork</div>
              </div>
              <div className="recruit-talent-icon-container">
                <div className="recruit-talent-icon-box">
                  <BsPersonCheckFill className="recruit-talent-icon" />
                </div>
                <div className="recruit-talent-icon-title">책임감</div>
                <div className="recruit-talent-icon-sub-title">
                  Accountability
                </div>
              </div>
              <div className="recruit-talent-icon-container">
                <div className="recruit-talent-icon-box">
                  <RiCustomerService2Fill className="recruit-talent-icon" />
                </div>
                <div className="recruit-talent-icon-title">고객지향</div>
                <div className="recruit-talent-icon-sub-title">
                  Customer Centered
                </div>
              </div>
            </div>
            <div className="recruit-talent-description-section">
              <div className="recruit-talent-description-container">
                <div className="recruit-talent-description-box">
                  <div className="recruit-talent-description-icon-box">
                    <BiRun className="recruit-talent-description-icon" />
                  </div>
                  <div className="recruit-talent-description-title-box">
                    <div className="recruit-talent-description-title">열정</div>
                    <div className="recruit-talent-description-sub-title">
                      Passion
                    </div>
                  </div>
                  <div className="recruit-talent-description-article">
                    <div className="recruit-talent-description-article-bold">
                      매사에 의욕이 넘치며 성과창출을 목표로 부단히 노력하는
                      인재
                    </div>
                    본인의 업무와 조직의 성공에 대한 열렬한 애정을 가지고,
                    <br />
                    적극적이고, 능동적인 자세로 일하는 인재
                    <br />
                  </div>
                </div>
                <div className="recruit-talent-description-box-devide-line" />
                <div className="recruit-talent-description-box">
                  <div className="recruit-talent-description-icon-box">
                    <HiLightBulb className="recruit-talent-description-icon" />
                  </div>
                  <div className="recruit-talent-description-title-box">
                    <div className="recruit-talent-description-title">
                      창의와 혁신
                    </div>
                    <div className="recruit-talent-description-sub-title">
                      Creativity
                      <br />& Innovation
                    </div>
                  </div>
                  <div className="recruit-talent-description-article">
                    <div className="recruit-talent-description-article-bold">
                      창의적인 시각으로 혁신을 제안하는 인재
                    </div>
                    업무와 조직에 대한 새롭고 창의적인 시각으로
                    <br />
                    조직의 경쟁력을 높일 수 있는 혁신을 제안하고 실행하는 인재
                    <br />
                  </div>
                </div>
                <div className="recruit-talent-description-box-devide-line" />
                <div className="recruit-talent-description-box">
                  <div className="recruit-talent-description-icon-box">
                    <GiTeamIdea className="recruit-talent-description-icon" />
                  </div>
                  <div className="recruit-talent-description-title-box">
                    <div className="recruit-talent-description-title">
                      팀워크
                    </div>
                    <div className="recruit-talent-description-sub-title">
                      Teamwork
                    </div>
                  </div>
                  <div className="recruit-talent-description-article">
                    <div className="recruit-talent-description-article-bold">
                      조직공통의 목표달성을 위해 힘쓰는 인재
                    </div>
                    조직공통의 목표 달성을 위해 상사, 동료, 부하, 타 부서를
                    <br />
                    적극적으로 도와주고, 협력을 이끌어내는 인재
                    <br />
                  </div>
                </div>
                <div className="recruit-talent-description-box-devide-line" />
                <div className="recruit-talent-description-box">
                  <div className="recruit-talent-description-icon-box">
                    <BsPersonCheckFill className="recruit-talent-description-icon" />
                  </div>
                  <div className="recruit-talent-description-title-box">
                    <div className="recruit-talent-description-title">
                      책임감
                    </div>
                    <div className="recruit-talent-description-sub-title">
                      Accountability
                    </div>
                  </div>
                  <div className="recruit-talent-description-article">
                    <div className="recruit-talent-description-article-bold">
                      본인의 업무를 끝까지 완수해내며, 그 결과에 대해서도
                      책임지려는 인재
                    </div>
                    자신의 업무에 대한 큰 사명감을 바탕으로 강한 추진력으로
                    <br />
                    업무를 완수해내며, 자신이 수행한 업무의 결과에 대해서도
                    책임을 짐
                    <br />
                  </div>
                </div>
                <div className="recruit-talent-description-box-devide-line" />
                <div className="recruit-talent-description-box">
                  <div className="recruit-talent-description-icon-box">
                    <RiCustomerService2Fill className="recruit-talent-description-icon" />
                  </div>
                  <div className="recruit-talent-description-title-box">
                    <div className="recruit-talent-description-title">
                      고객지향
                    </div>
                    <div className="recruit-talent-description-sub-title">
                      Customer Centered
                    </div>
                  </div>
                  <div className="recruit-talent-description-article">
                    <div className="recruit-talent-description-article-bold">
                      고객의 입장에서 사고하고 행동하는 인재
                    </div>
                    고객의 입장에서 사고하고, 진정성으로 고객을 대함으로써
                    <br />
                    고객의 니즈 그 이상의 가치를 제공하는 인재
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {content === 2 && (
          <div className="recruit-infomation-container">
            <div className="recruit-development-main-title color-blue">
              모베이스 오토테크는 객관적이고 공정한 인사관리 제도를 실시하고
              있습니다.
            </div>
            <div className="recruit-development-sub-title">
              끊임 없는 기술축척과 품질개선으로 지속적인 발전을 이륙해 온
              (주)모베이스 오토테크의 꿈을 실현해 나가기 위해
              <br />
              인간존중을 바탕으로 하여 채용에서 퇴직 인력관리에 있어 객관적이고
              공정한 인사관리 및 개인의 발전을 통한
              <br />
              <div className="recruit-development-sub-title-black">
                회사의 발전을 위해 지속적인 인재관리 제도
              </div>
              를 실시하고 있습니다.
            </div>
            <div className="recruit-devide-line" />
            <div className="recruit-development-detail-description-container">
              <div className="recruit-development-detail-description-circle-box">
                <div className="recruit-development-detail-description-circle-box-right-top" />
                <div className="recruit-development-detail-description-circle-box-left-bottom" />
                <div className="recruit-development-detail-description-circle-box-center" />
                <div className="recruit-development-detail-description-circle-box-small-circle-top">
                  <BsPlus className="recruit-development-detail-description-circle-box-small-circle-icon" />
                </div>
                <div className="recruit-development-detail-description-circle-box-small-circle-bottom">
                  <BsPlus className="recruit-development-detail-description-circle-box-small-circle-icon" />
                </div>
                <div className="recruit-development-detail-description-circle-box-small-circle-left">
                  <BsPlus className="recruit-development-detail-description-circle-box-small-circle-icon" />
                </div>
                <div className="recruit-development-detail-description-circle-box-small-circle-right">
                  <BsPlus className="recruit-development-detail-description-circle-box-small-circle-icon" />
                </div>
                <div className="recruit-development-detail-description-circle-box-small-circle-center-icon-box">
                  <ImManWoman className="recruit-development-detail-description-circle-box-small-circle-center-icon" />
                </div>
              </div>
              <div className="recruit-development-detail-description-side-box-left">
                <HiOutlineLightBulb className="recruit-development-detail-description-side-icon" />
                <div className="recruit-development-detail-description-side-title">
                  개인의 창의와 자율 존중
                </div>
                <div className="recruit-development-detail-description-side-article">
                  개개인이 창의력을 <br />
                  충분히 발휘할 수 있도록 개성과
                  <br /> 다양성을 존중합니다.
                </div>
              </div>
              <div className="recruit-development-detail-description-side-box-right">
                <HiOutlinePresentationChartBar className="recruit-development-detail-description-side-icon" />
                <div className="recruit-development-detail-description-side-title">
                  장기적 관점의 인사
                </div>
                <div className="recruit-development-detail-description-side-article">
                  인사와 관련된 인사결정과 <br />
                  활동을 장기적 관점에서
                  <br /> 일관되고 공정히 추진합니다.
                </div>
              </div>
              <div className="recruit-development-detail-description-side-box-left-bottom">
                <AiFillTrophy className="recruit-development-detail-description-side-icon" />
                <div className="recruit-development-detail-description-side-title">
                  성과에 따른 보상
                </div>
                <div className="recruit-development-detail-description-side-article">
                  성과는 공정하게 평가하고 <br />
                  개인별/조직별 기여도에 따라 보상합니다.
                </div>
              </div>
              <div className="recruit-development-detail-description-side-box-right-bottom">
                <GoLaw className="recruit-development-detail-description-side-icon" />
                <div className="recruit-development-detail-description-side-title">
                  공평한 기회 제공
                </div>
                <div className="recruit-development-detail-description-side-article">
                  직원의 능력과 자질에 따라 <br />
                  공평한 기회를 제공합니다.
                </div>
              </div>
            </div>
            <div className="recruit-devide-line" />
            <div className="recruit-payment-container">
              <div className="recruit-section-title-line"></div>
              <div className="recruit-section-title">급여 제도</div>
              <div className="recruit-payment-description-box">
                <div className="recruit-payment-description-box-item">
                  <div className="recruit-payment-description-box-item-icon-box">
                    <FaSearchDollar className="recruit-payment-description-box-item-icon" />
                  </div>
                  <div className="recruit-payment-description-box-item-article">
                    사무직 연봉제 / 현장직 시급제 실시
                  </div>
                </div>
                <div className="recruit-payment-description-box-item">
                  <div className="recruit-payment-description-box-item-icon-box">
                    <FaFileInvoiceDollar className="recruit-payment-description-box-item-icon" />
                  </div>
                  <div className="recruit-payment-description-box-item-article">
                    경영성과 따른 특별성과급 지급
                  </div>
                </div>
              </div>
            </div>
            <div className="recruit-promotion-container">
              <div className="recruit-section-title-line"></div>
              <div className="recruit-section-title">승격 제도</div>
              <div className="recruit-promotion-table">
                <div className="recruit-promotion-top">
                  <div className="recruit-promotion-table-title">개요</div>
                  <div className="recruit-promotion-table-title-column">
                    사원
                  </div>
                  <div className="recruit-promotion-table-title-column">
                    대리
                  </div>
                  <div className="recruit-promotion-table-title-column">
                    과장
                  </div>
                  <div className="recruit-promotion-table-title-column">
                    차장
                  </div>
                  <div className="recruit-promotion-table-title-column">
                    부장
                  </div>
                </div>
                <div className="recruit-promotion-bottom">
                  <div className="recruit-promotion-table-title-bottom">
                    년수
                  </div>
                  <div className="recruit-promotion-table-title-column-bottom">
                    4
                  </div>
                  <div className="recruit-promotion-table-title-column-bottom">
                    4
                  </div>
                  <div className="recruit-promotion-table-title-column-bottom">
                    4
                  </div>
                  <div className="recruit-promotion-table-title-column-bottom">
                    4
                  </div>
                  <div className="recruit-promotion-table-title-column-bottom">
                    4
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Recruit;
