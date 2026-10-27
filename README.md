# CNU Theriogenology Lab · Astro

Quarto 자료를 재사용한 충남대학교 수의산과학 실험실 홈페이지입니다.

## 실행

Node.js 22 이상에서:

```sh
npm install
npm run dev
npm run build
npm run preview
```

정적 배포 폴더는 `dist/`입니다. Netlify, Cloudflare Pages, GitHub Pages 등에서 사용 가능합니다. `https://cnu-therio.github.io/labpage/` 배포 경로가 설정되어 있습니다. 내부 링크와 이미지는 `src/utils/paths.ts`의 `withBase()`로 경로를 만들고, Markdown은 `renderMarkdown()`으로 렌더링합니다. 저장소 이름을 변경하면 `astro.config.mjs`의 `base`도 변경하세요.

## 콘텐츠 수정

- `src/content/publications.json`: 논문 목록 및 DOI. 제목·저자·학술지 검색과 연도 필터에 사용됩니다.
- `src/content/*.md`: 원본 Quarto에서 변환한 지도교수 경력, 졸업생, 연락처, 연구 소개.
- `src/pages/people.astro`: 현재 연구진
- `src/pages/index.astro`: 메인 화면, 소식 및 연구 요약
- `public/images/`: 원본 인물 사진 및 CNU 로고
- `src/styles.css`: 반응형 디자인

## 이전 범위

원본에 포함된 논문 9편, 지도교수 학력·경력, 재학생 1명, 졸업생 5명, 연구 분야 3개, 공동 연구 소개, 소식, 연락처와 지도 링크를 재사용했습니다. 원본의 정보 시점을 유지했습니다. 원문에 DOI가 있는 논문에만 DOI 링크를 표시합니다. 기존 `members.html` 등 링크 호환용 리디렉션도 포함됩니다. 메인 화면은 연구 대상·방법을 연결한 텍스트 기반 연구 개요를 제공합니다. 연구 성과와 연구 방향을 구분해 표시합니다.
