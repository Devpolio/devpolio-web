<script lang="ts" setup>
import * as S from "./style";
</script>

<template>
  <S.Container>
    <S.Wrap>
      <S.Title>회원가입</S.Title>
      <S.Info>
        <S.InputWrap>
          <S.InputBox>
            <S.InputTitle>닉네임</S.InputTitle>
            <S.Input placeholder="닉네임을 입력해주세요"></S.Input>
          </S.InputBox>
          <S.InputBox>
            <S.InputTitle>이메일</S.InputTitle>
            <S.Input placeholder="이메일을 입력해주세요"></S.Input>
          </S.InputBox>
          <S.InputBox>
            <S.InputTitle>비밀번호</S.InputTitle>
            <S.Input placeholder="비밀번호를 입력해주세요"></S.Input>
          </S.InputBox>
        </S.InputWrap>
        <S.ButtonWrap>
          <S.Button>회원가입</S.Button>
          <S.TextWrap>
            <S.Text>이미 계정이 있다면?</S.Text>
            <S.Link>로그인</S.Link>
          </S.TextWrap>
        </S.ButtonWrap>
      </S.Info>
    </S.Wrap>
  </S.Container>
</template>
