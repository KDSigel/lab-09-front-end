import React, { Component } from 'react'
import request from 'superagent'

export async function getAllBikes() {
    const allBikes = await request.get(`https://karls-bikes-app.herokuapp.com/karlsbikes`);
        return allBikes.body;
};

export async function getAllTypes() {
    const allTypes = await request.get(`https://karls-bikes-app.herokuapp.com/karlsbikes/types`);
        return allTypes.body;
};

export async function getOneBike(id) {
    const oneBike = await request.get(`https://karls-bikes-app.herokuapp.com/karlsbikes/${id}`);
        return oneBike.body;
};

export async function deleteOneBike(id) {
    const deletedBike = await request.delete(`https://karls-bikes-app.herokuapp.com/karlsbikes/${id}`);
        return deletedBike.body;
};

export async function editBike(id, newInfo) {
    const editedBike = await request.put(`https://karls-bikes-app.herokuapp.com/karlsbikes/${id}`)
    .send(newInfo);
        return editedBike.body;
};

export async function createBike(bike) {
    const newBike = await request.post(`https://karls-bikes-app.herokuapp.com/karlsbikes/`)
    .send(bike);
        return newBike.body;
};
