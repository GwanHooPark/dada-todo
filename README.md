# TODO
> monorepo todo 모음.

[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)
<!-- [![Generic badge](https://img.shields.io/badge/vue-2.17-brightgreen)](https://shields.io/)
[![Generic badge](https://img.shields.io/badge/yarn-1.22.1-blue.svg)](https://shields.io/)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-11.0.0-yellow.svg)](https://conventionalcommits.org) -->

## 🔨 초기 설치
```bash
# yarn, lerna 설치
$ npm i -g yarn
$ npm i -g lerna

# 의존성 설치
$ yarn install
```
## 🔨 구동
```bash
# 로컬 개발
# 서비스 구동 (root의 package.json 참고)
$ yarn start:vue
```

## 📁 Package
| 패키지 | 설명 |
| :---------: | --------- |
| vue | vue 기반 todo application |


## 📙 Coding convention
- [style-guide](https://kr.vuejs.org/v2/style-guide/index.html#%EC%9A%B0%EC%84%A0%EC%88%9C%EC%9C%84-A-%ED%95%84%EC%88%98)

## 🌏 Browser Support
| <img src="https://user-images.githubusercontent.com/1215767/34348387-a2e64588-ea4d-11e7-8267-a43365103afe.png" alt="Chrome" width="16px" height="16px" /> Chrome | <img src="https://user-images.githubusercontent.com/1215767/34348590-250b3ca2-ea4f-11e7-9efb-da953359321f.png" alt="IE" width="16px" height="16px" /> Internet Explorer | <img src="https://user-images.githubusercontent.com/1215767/34348380-93e77ae8-ea4d-11e7-8696-9a989ddbbbf5.png" alt="Edge" width="16px" height="16px" /> Edge | <img src="https://user-images.githubusercontent.com/1215767/34348394-a981f892-ea4d-11e7-9156-d128d58386b9.png" alt="Safari" width="16px" height="16px" /> Safari | <img src="https://user-images.githubusercontent.com/1215767/34348383-9e7ed492-ea4d-11e7-910c-03b39d52f496.png" alt="Firefox" width="16px" height="16px" /> Firefox |
| :---------: | :---------: | :---------: | :---------: | :---------: |
| Yes | 11+ | Yes | Yes | Yes |

```bash

## root에 패키지 추가
$ yarn add --dev 패키지명 -W

## core 패키지에 추가
$ yarn workspace core add 패키지명


```
