# 1️⃣ Toggle
![toggle](https://user-images.githubusercontent.com/92790783/153161772-4fd4d98b-a26d-4d6b-8e60-9bf59e052985.gif)
#### ❗구현 방법
- check/uncheck를 반복하면서 전환될 수 있도록 구현하였습니다.
- `Checkbox type="checkbox"`체크박스로 만들고, 체크박스는 스타일링 하기에 어려움이 있어 `label`을 만들어 체크박스와 연결하고 체크박스는 `display:none`으로 구현하였습니다.
- `useState`를 이용하여 토글 할 수 있는 `toggled` 값을 관리하며, `toggle` 값에 따라 토글 창의 배경색, 버튼의 위치, 설명이 바뀌게 하였습니다.

#### ⁉️ 구현하면서 어려웠던 점과 해결 방법
- 색이 변할 때 서서히 색이 차오르게 구현하고 싶었는데, 토클시 색이 바로 바뀌는 어려움이 있었습니다.
- ` background: linear-gradient(to left, #4a00ce 50%, #c5c5c5 50%) left;`로 색을 채워놓고 `background-size: 200%;`로 설정하여, 회색만 보이게 하고 `OFF`의 상태가 되었을 경우 천천히 보라색으로 채워지게 하였습니다.

#### 💡 실행 방법
`checkbox`를 체크박스 타입으로 만들고, `toggleHandler`함수를 통해 toggle의 true/false 값을 변경하였습니다. 동그란 버튼을 `position: absolute;`, Label을 `position: relative;`으로 하여 동그란 버튼이 `Label 안에 들어가게 하였습니다. 버튼 클릭 시 삼 항 연산자를 이용하여, `ON/OFF` 유무를 보여주게 됩니다.
```
      <ToggleWrapper>
        <Checkbox type="checkbox" onChange={toggleHandler} />
        <Label />
        <Desc>
          <p>Toggle Switch {toggled ? "ON" : "OFF"}</p>
        </Desc>
      </ToggleWrapper>
```

# 2️⃣ Modal
![modal](https://user-images.githubusercontent.com/92790783/153161785-54c6c9f7-81e6-4268-ad8c-5ce912925ae5.gif)
#### ❗구현 방법
- `useState`를 이용하여 `true`이면 모달창을 보여주고, `false`이면 모달창을 닫습니다.
- `Open Modal` 버튼 클릭할 때 클릭 이벤트를 통해 모달창을 보여주고, 외부 배경에서 x 표시 클릭할 때 모달창이 닫힙니다.

#### ⁉️ 구현하면서 어려웠던 점과 해결 방법
- 버튼 클릭 시 모달창이 보이는 경우 배경을 클릭하면 모달창이 닫히고, 모달창 내부를 클릭하면 닫히지 않게 구현에 어려움이 있었습니다.
- `onClick={(e) => e.stopPropagation()`을 적용하여 자식 컴포넌트에서는 작동하지 않도록 함으로써, 모달창 내부 클릭 시 모달창이 닫히게 되는 문제를 해결하였습니다.
 
#### 💡 실행 방법
`isOpen` 이 true일 경우 모달창과 배경이 나타나게 되고, x 표시를 클릭하게 되면 모달창이 닫히게 됩니다. 이때, 외부 모달창 클릭 시에는 닫히게 구현하였으며, `ModalBody`인 내부 모달은 `e.stopPropagation()`를 사용하여 x 표시를 제외한 곳을 클릭 시 어떠한 반응이 일어나지 않게 하였습니다.
```
    <Container>
      <Button onClick={toggleModal}>Open Modal</Button>
      {isOpen ? (
        <ModalBackground onClick={() => setIsOpen(false)}>
          <ModalBody role="dialog" onClick={(e) => e.stopPropagation()}>
            <div className="close-button" onClick={toggleModal}>
              &times;
            </div>
            <div>HELLO CODESTATES!</div>
          </ModalBody>
        </ModalBackground>
      ) : null}
    </Container>
```


# 3️⃣ Tab
![tab](https://user-images.githubusercontent.com/92790783/153161796-e261fb77-a0b6-486e-941c-5858000bd793.gif)
#### ❗구현 방법
- `useState`를 사용해 `tapState`를 관리하였으며, 선택된 탭의 `index`를 통해 표시되게 되고, li 태그에 클릭 이벤트로 index 값이 변할 때마다 `selectTabHandler(idx)`를 불러오게 하였습니다.

#### ⁉️ 구현하면서 어려웠던 점과 해결 방법
- 특정 탭을 클릭 시 index에 따라 `tab active`한 상태로 보여줘야 했는데 그 과정에서 어떻게 하여 구현을 해야 할 지 어려움이 있었습니다.
- `tabList`를 `map`함수의 두 번째 인자로 `index`를 넣어 해결할 수 있었습니다.
#### 💡 실행 방법
- `onClick`을 실행할 때마다 `index`값을 onClick 핸들러 함수에 전달하게 되고, 그 값을 통해 `tabList`의 `className`을 바꿔 CSS 속성을 다르게 주어 선택된 탭의 색만 변하게 됩니다.
```
    <div>
      <TapWrapper>
        {tabList.map((tab, index) => {
          return (
            <li
              key={index}
              className={`${index === tapState ? "tabList active" : "tabList"}`}
              onClick={() => selectTabHandler(index)}
            >
              {tab.id}
            </li>
          );
        })}
      </TapWrapper>
      <Desc>{tabList[tapState].content}</Desc>
    </div>
```

# 4️⃣ Tag
![tag](https://user-images.githubusercontent.com/92790783/153161802-68bf5440-9c5f-4da0-b9a1-1af76046b055.gif)
#### ❗구현 방법
- `input`값을 입력하고 `Enter`키를 입력하면 `addTags()`함수를 사용하여 추가되게 하였으며, 이전에 입력된 태그들을 포함하여 보여줍니다.
- `removeTags()`함수를 사용하여 삭제 후 나머지 배열들만 보이게 구현하였습니다.

#### ⁉️ 구현하면서 어려웠던 점과 해결 방법
- `removeTags()`함수를 구현할 때 로직을 짜는 부분에 있어서 고민이 있었습니다.
- `filter`함수를 사용하여 `index`와 일치하지 않는 태그를 filtr 하여 `setTags()`상태를 업데이트하게 됩니다.
#### 💡 실행 방법
`input`창에 값을 입력하고 `Enter`키를 누르게 되면 입력이 되고, 반값을 입력 시에는 입력이 되지 않게 구현하였습니다. 또한, 해당 태그의 `x 표시`를 클릭하게 되면 `removeTags()`함수를 사용하여 삭제되도록 하였습니다.
```
  const [tags, setTags] = useState(["CodeStates", "JJang"]);
  const removeTags = (index) => {
    setTags(
      tags.filter((tag) => {
        return tag !== tags[index];
      })
    );
  };
  const addTags = (e) => {
    if (e.key === "Enter" && e.target.value !== "") {
      setTags([...tags, e.target.value]);
      e.target.value = "";
    }
  };
```
# 5️⃣ AutoComplete
![autocomplete](https://user-images.githubusercontent.com/92790783/153161811-c35bec58-df7d-41d9-a346-e5e5196228de.gif)
#### ❗구현 방법과 이유
- 검색에 사용할 단어들을 `selectedData`에 더미 데이터로 만들었으며, `input`에 값이 입력될 때마다 `selectedData`를 `filter`함수를 사용하여 입력된 문자를 보여주게 하였습니다. 또한, 동일한 단어가 1개 이상일 경우 자동완성 단어를 보여주게 하였습니다.
- `input`에 값이 없으면 `DropDown`이 보이지 않게 해주었습니다.
#### ⁉️ 구현하면서 어려웠던 점과 해결 방법
자동완성 기능을 구현하기 위해서 어떤 식으로 데이터를 보여주게끔 해야 할지 어려움이 있었습니다.
이때, `filter`함수를 통해 동일 글자를 필터링하게 되고 `includes`를 사용하여 글자를 포함하고 있는 단어를 보여주도록 해결하였습니다.

#### 💡 실행 방법
`input`창에 값을 입력하게 되면 동일한 문자가 있는 단어를 자동으로 보여주게 됩니다.
```
  useEffect(() => {
    if (inputState === "") {
      setHasInput(false);
      setOptions([]);
    }
    if (inputState !== "") {
      setOptions(
        selectedData.filter((el) => {
          return el.includes(inputState);
        })
      );
    }
  }, [inputState]);
```
# 6️⃣ ClickToEdit
![clicktoedit](https://user-images.githubusercontent.com/92790783/153161827-8ed04056-d5fc-44c0-9e7b-a7bf108aa352.gif)
#### ❗구현 방법과 이유
- `useRef()`함수를 사용하여 `name` input, `age` input 창을 클릭 시 `focus`를 줄 수 있습니다. `name`과 `age`를 입력 시 실시간으로 `InputForm`에 이름, 나이를 보여줍니다. 
#### ⁉️ 구현하면서 어려웠던 점과 해결 방법
- `input`창에 값을 입력 시 입력 중에 실시간으로 바뀌게 되었습니다.
- 이를 해결하기 위해 `MyInput`을 `ClickToEdit` 컴포넌트의 자식 컴포넌트로 하여 `value`에 `{name, age}`로 `name`상태값과 `age`상태값을 가지게 하였다. `handleblur()`함수를 사용하여 부모 요소의 `name`, `age`값을 변경하도록 구현하였습니다.
#### 💡 실행 방법
- `useEffect`을 사용하여 `Edit`이 활성화되면 `input`창에 `focus`를 주어 수정이 가능하도록 해주었습니다.
- `handleBlur()`함수를 사용하여 `input`창이 아닌 다른 곳을 클릭하게 되면 수정할 수 없게 하고 `input`창에 입력되어있는 값으로 `newInuput`을 변경해 Edit 된 값이 나오게 됩니다.
```
  useEffect(() => {
    if (isEdit) {
      inputRef.current.focus();
    }
  }, [isEdit]);

  useEffect(() => {
    setNewInput(value);
  }, [value]);

  const handleClick = () => {
    setEdit(true);
  };

  const handleBlur = () => {
    setEdit(false);
    handleValueChange(newInput);
  };

  const handleInputChange = (e) => {
    setNewInput(e.target.value);
  };
```
