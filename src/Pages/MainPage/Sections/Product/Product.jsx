import "./Product.css";
import React, { useState } from "react";
import { BiRadioCircle } from "react-icons/bi";
import multiInputDevice_image from "../../../../asset/image/Multi-Input-Device.png";
import electricSteeringColumnLock_image from "../../../../asset/image/electric-steering-column-lock.png";
import foldingKey from "../../../../asset/image/folding-key.png";
import steeringWheelRemoteControlSwitch from "../../../../asset/image/steering-wheel-remote-control-switch.png";
import instrumentPannerSwitch from "../../../../asset/image/instrument-panner-switch.png";
import centerFaciaSwitch from "../../../../asset/image/center-facia-switch.png";
import consoleSwitch from "../../../../asset/image/console-switch.png";
import sideCrushPadSwitch from "../../../../asset/image/side-crush-pad-switch.png";
import fanMotor from "../../../../asset/image/fan-motor.png";

function Product({ content, setContent }) {
  return (
    <div className="product-container">
      <div className="product-sub-header">
        <div
          className={`product-sub-header-menu ${
            content === 1 ? "clicked" : ""
          }`}
          onClick={() => setContent(1)}
        >
          Convenience Control System
        </div>
        <div
          className={`product-sub-header-menu ${
            content === 2 ? "clicked" : ""
          }`}
          onClick={() => setContent(2)}
        >
          Security System
        </div>

        <div
          className={`product-sub-header-menu ${
            content === 3 ? "clicked" : ""
          }`}
          onClick={() => setContent(3)}
        >
          HMI
        </div>

        <div
          className={`product-sub-header-menu ${
            content === 4 ? "clicked" : ""
          }`}
          onClick={() => setContent(4)}
        >
          Fan Motor
        </div>
      </div>
      <div className="product-contents">
        {content === 1 && (
          <div className="product-introduce-container">
            <div className="product-introduce-name-bar" />
            <div className="product-introduce-name">Multi-Input Device</div>
            <div className="product-introduce-title">
              <BiRadioCircle className="product-introduce-title-icon" /> 제품
              사진
            </div>
            <div className="product-introduce-article">
              <div className="product-introduce-image">
                <img
                  src={multiInputDevice_image}
                  alt="MULTI INPUT DEVICE"
                  className="product-image-m"
                />
              </div>
            </div>
            <div className="product-introduce-title">
              <BiRadioCircle className="product-introduce-title-icon" /> 제품
              개요
            </div>
            <div className="product-introduce-article">
              DIS(DRIVER INFORMARION SYSTEM)제어를 위한 집중형 조작계로
              내비게이션, 멀티미디어 기기, 차량 전자 제어 장치 등을 하나의
              시스템으로 통합시켜 집중키 방식으로 제어할 수 있는 시스템입니다.
            </div>
            <div className="product-introduce-title">
              <BiRadioCircle className="product-introduce-title-icon" /> 제품
              특징
            </div>
            <div className="product-introduce-article product-introduce-article-line-height">
              - 오목형 센서 및 글라스 적용
              <br />
              - 문자입력용 전자식 터치/햅틱 기술 적용
              <br />
              - 회전 및 4방향 조작 가능한 REAL METAL WHEEL
              <br />
            </div>
          </div>
        )}
        {content === 2 && (
          <div className="product-introduce-container">
            <div className="product-introduce-name-bar" />
            <div className="product-introduce-name">
              Electronics Steering Column Lock
            </div>
            <div className="product-introduce-title">
              <BiRadioCircle className="product-introduce-title-icon" /> 제품
              사진
            </div>
            <div className="product-introduce-article">
              <div className="product-introduce-image">
                <img
                  src={electricSteeringColumnLock_image}
                  alt="ELECTRONICS STEERING COLUMN LOCK"
                  className="product-image-sm"
                />
              </div>
            </div>
            <div className="product-introduce-title">
              <BiRadioCircle className="product-introduce-title-icon" /> 제품
              개요
            </div>
            <div className="product-introduce-article">
              모베이스 전자가 세계 일류를 겨냥하여 자체 개발한 제품으로 차량에
              장착된 안테나와의 통신으로 도어 및 트렁크 개폐가 가능하며 버튼을
              통한 편리한 시동 기능 뿐만 아니라 기존의 키셋트보다 보안성이 한층
              더 강화된 제품입니다.
            </div>
            <div className="product-introduce-title">
              <BiRadioCircle className="product-introduce-title-icon" /> 제품
              특징
            </div>
            <div className="product-introduce-article product-introduce-article-line-height">
              - 스티어링 컬럼 잠금 / 해제 및 차량 전원 OFF / ACC / IGN 전환 기능
            </div>
            <div className="product-introduce-margin-bottom" />
            <div className="product-introduce-name-bar" />
            <div className="product-introduce-name">Folding Key</div>
            <div className="product-introduce-title">
              <BiRadioCircle className="product-introduce-title-icon" /> 제품
              사진
            </div>
            <div className="product-introduce-article">
              <div className="product-introduce-image">
                <img
                  src={foldingKey}
                  alt="FOLDING KEY"
                  className="product-image-sm"
                />
              </div>
            </div>
            <div className="product-introduce-title">
              <BiRadioCircle className="product-introduce-title-icon" /> 제품
              개요
            </div>
            <div className="product-introduce-article">
              차량 운행에 가장 기본적이고 필수적인 장치로, 운전자가 LOCK 장치를
              사용하여 도어 및 트렁크를 열거나 잠글 수 있게 하고 차량 각부에
              전원인가 및 시동을 가능하게 합니다.
            </div>
            <div className="product-introduce-title">
              <BiRadioCircle className="product-introduce-title-icon" /> 제품
              특징
            </div>
            <div className="product-introduce-article product-introduce-article-line-height">
              - 차량 잠금 및 해제 역할
            </div>
          </div>
        )}
        {content === 3 && (
          <div className="product-introduce-container">
            <div className="product-introduce-name-bar" />
            <div className="product-introduce-name">
              Steering Wheel Remote Control Switch
            </div>
            <div className="product-introduce-title">
              <BiRadioCircle className="product-introduce-title-icon" /> 제품
              사진
            </div>
            <div className="product-introduce-article">
              <div className="product-introduce-image">
                <img
                  src={steeringWheelRemoteControlSwitch}
                  alt="ELECTRONICS STEERING COLUMN LOCK"
                  className="product-image-long"
                />
              </div>
            </div>
            <div className="product-introduce-title">
              <BiRadioCircle className="product-introduce-title-icon" /> 제품
              개요
            </div>
            <div className="product-introduce-article">
              운전자의 편의와 안전을 위하여 스티어링 휠에서 손을 떼지 않고
              오디오, 클러스터 등을 조작할 수 있게 해주는 장치 입니다.
            </div>
            <div className="product-introduce-title">
              <BiRadioCircle className="product-introduce-title-icon" /> 제품
              특징
            </div>
            <div className="product-introduce-article product-introduce-article-line-height">
              - 음성인식 기능 ON/OFF
              <br />
              - 볼륨 UP/DOWN, 음소거(MUTE) ON/OFF 기능
              <br />
              - MODE 선택 기능(FM1, FM2, AM, MP3 등)
              <br />
              - 블루투스 통화 기능(SEND-전화받기, END-전화 끊기)
              <br />
              - CRUISE 모드 ON/OFF 기능, CRUISE 속도 증가/감소 기능
              <br />- 클러스터 LCD 창 MODE 변경 및 메뉴 선택 기능
            </div>
            <div className="product-introduce-margin-bottom" />
            <div className="product-introduce-name-bar" />
            <div className="product-introduce-name">
              Instrument Panner Switch
            </div>
            <div className="product-introduce-title">
              <BiRadioCircle className="product-introduce-title-icon" /> 제품
              사진
            </div>
            <div className="product-introduce-article">
              <div className="product-introduce-image-flex">
                <div className="product-introduce-article-flex">
                  <img
                    src={consoleSwitch}
                    alt="consoleSwitch"
                    className="product-image-xs"
                  />
                  <div className="product-introduce-image-title">
                    Console Switch
                  </div>
                </div>
                <div className="product-introduce-article-flex">
                  <img
                    src={centerFaciaSwitch}
                    alt="centerFaciaSwitch"
                    className="product-image-xs"
                  />
                  <div className="product-introduce-image-title">
                    Center Facia Switch
                  </div>
                </div>
                <div className="product-introduce-article-flex">
                  <img
                    src={sideCrushPadSwitch}
                    alt="sideCrushPadSwitch"
                    className="product-image-xs"
                  />
                  <div className="product-introduce-image-title">
                    Side Crush Pad Switch
                  </div>
                </div>
              </div>
            </div>
            <div className="product-introduce-title">
              <BiRadioCircle className="product-introduce-title-icon" /> 제품
              개요
            </div>
            <div className="product-introduce-article">
              차량의 내부 인스트루먼트 판넬에 장착되어 각종 편의 및 안전장치를
              작동시키는 장치입니다.
            </div>
            <div className="product-introduce-title">
              <BiRadioCircle className="product-introduce-title-icon" /> 제품
              특징
            </div>
            <div className="product-introduce-article product-introduce-article-line-height">
              - 조작 방식에 따라 Push & Return or Push lOCK, Rotary 타입으로
              작동
              <br />
              - 전기적 부하 처리 유무에 따라 직접 부하 방식 or 신호 전달
              방식으로 구분
              <br />- 조립방식에 따라 스위치 개별 조립형, 개별 스위치 BEZEL
              일체형, BODY 일체형으로 구분
            </div>
          </div>
        )}
        {content === 4 && (
          <div className="product-introduce-container">
            <div className="product-introduce-name-bar" />
            <div className="product-introduce-name">전기자동차용 Fan Motor</div>
            <div className="product-introduce-title">
              <BiRadioCircle className="product-introduce-title-icon" /> 제품
              사진
            </div>
            <div className="product-introduce-article">
              <div className="product-introduce-image">
                <img
                  src={fanMotor}
                  alt="FAN MOTOR"
                  className="product-image-sm"
                />
              </div>
            </div>
            <div className="product-introduce-title">
              <BiRadioCircle className="product-introduce-title-icon" /> 제품
              개요
            </div>
            <div className="product-introduce-article">
              전기자동차 및 HEV의 배터리를 냉각시켜 출력 성능 유지
            </div>
            <div className="product-introduce-title">
              <BiRadioCircle className="product-introduce-title-icon" /> 제품
              특징
            </div>
            <div className="product-introduce-article product-introduce-article-line-height">
              - 저소음
              <br />- 초경량
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Product;
