import profileReducer, {addPostActionCreator} from "./profile-reducer";
import React from "react";

it('new post should be added', () => {
    //1. Исходные данные
    let action = addPostActionCreator("rrrrrrrrr");
    let state = {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCounts: 15},
            {id: 2, message: 'It\'s my first post', likesCounts: 20},
            {id: 3, message: 'DaDa', likesCounts: 8},
            {id: 4, message: 'BlaBla', likesCounts: 5}
        ]
    };
    //2. Action
    let newState = profileReducer(state, action);
    //3. Что ожидаем получить (что длина массива будет 5 элементов)
    expect(newState.posts.length).toBe(5)
});

it('new post should be correct', () => {
    let action = addPostActionCreator("rrrrrrrrr");
    let state = {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCounts: 15},
            {id: 2, message: 'It\'s my first post', likesCounts: 20},
            {id: 3, message: 'DaDa', likesCounts: 8},
            {id: 4, message: 'BlaBla', likesCounts: 5}
        ]
    };
    let newState = profileReducer(state, action);
    expect(newState.posts[4].message).toBe("rrrrrrrrr")
});

it('new post should be correct', () => {
    let action = addPostActionCreator("rrrrrrrrr");
    let state = {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCounts: 15},
            {id: 2, message: 'It\'s my first post', likesCounts: 20},
            {id: 3, message: 'DaDa', likesCounts: 8},
            {id: 4, message: 'BlaBla', likesCounts: 5}
        ]
    };
    let newState = profileReducer(state, action);
    expect(newState.posts[4].message).toBe("rrrrrrrrr")
});

//Далее TDD. Проверка создаваемых reducer

/*
it('after deleting length should be decrement', () => {
    let action = deletePost(1); //Нужно создать данный case, константу
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(3)
});*/
