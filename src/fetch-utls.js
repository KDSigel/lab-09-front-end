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
    const oneBike = await request.delete(`https://karls-bikes-app.herokuapp.com/karlsbikes/${id}`);
        return oneBike.body;
};
