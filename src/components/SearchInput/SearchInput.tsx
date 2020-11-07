import React, { useState } from "react";
import { observer } from "mobx-react";
import debounce from "lodash/debounce";
import { useHistory } from "react-router-dom";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";

import {
  InputWrapper,
  StyledCloseIcon,
  StyledSearchIcon,
  Input
} from "./styles";
import { grayColor } from "assets/variables";

interface ISearchInput {
  store: any;
  loading?: boolean;
  minLength?: number;
  onBlur?: Function;
  background?: string;
  list?: boolean;
}

const InputIconClose = observer(({ onClear }) => {
  return (
    <StyledCloseIcon
      icon={faTimes}
      size="lg"
      color={grayColor}
      onClick={onClear}
    />
  );
});

export const SearchInput = observer(
  ({
    store,
    minLength = 3,
    onBlur,
    background = "#ffffff",
    list
  }: ISearchInput) => {
    const [searchTerm, setSearchTerm] = useState("");
    const history = useHistory();

    const onSubmit = async (e) => {
      e.preventDefault();

      store.getSearchTerm(searchTerm);
      history.push("/results");
    };

    const onSearch = (value: string) => {
      if (value.length >= minLength || value === "") {
        if (list) {
          store.list({ query: value });
        } else {
          store.relatedSearch({ query: value });
        }
      }
    };

    const debouncedOnSearch = debounce(onSearch, 500);

    const onChange = (value: string) => {
      setSearchTerm(value);
      store.getSearchTerm(value);
      debouncedOnSearch(value);
    };

    const onClear = () => {
      onChange("");
    };

    return (
      <form onSubmit={onSubmit}>
        <InputWrapper>
          <StyledSearchIcon
            icon={faSearch}
            size="lg"
            color={grayColor}
            onClick={onSubmit}
          />
          <Input
            role="search"
            type="text"
            placeholder="Search free high-resolution photos"
            value={searchTerm}
            background={`${background}`}
            onChange={(event) => {
              onChange(event.target.value);
            }}
            onBlur={onBlur}
          />
          {searchTerm && <InputIconClose onClear={onClear} />}
        </InputWrapper>
      </form>
    );
  }
);
