# Authentication app frontend

## テスト方針

- シナリオテスト -> Cypress
  - 最低限の機能の動作を担保する。
- リグレッションテスト -> reg-suit
  - features 以下の差分を取っておく
- コンポーネントテスト -> React Testing Library
  - components 以下の共通コンポーネントに対して実施
- ユニットテスト -> jest
  - それ以外のロジック周り（lib や feature 以下のロジックとか）に対して実施
