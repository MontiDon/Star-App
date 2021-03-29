import React from 'react';

class SwapiService {
    _apiBase = 'https://swapi.dev/api/'

    async GetResource (url) {
        const response = await fetch(`${this._apiBase}${url}`)
        if (!response.ok) {
            throw new Error(`Could not fetch ${url}, received ${response.status}`)
        }
        return await response.json()
    }
    async getAllPeople() {
        const response = await this.GetResource('people/')
        return response.results;
    }
    getPerson(id) {
        return this.GetResource(`people/${id}/`)
    }
    async getAllPlanets() {
        const response = await this.GetResource('planets/')
        return response.results;
    }
    getPlanet(id) {
        return this.GetResource(`planets/${id}/`)
    }
    async getAllStarships() {
        const response = await this.GetResource('starships/')
        return response.results;
    }
    getStarship(id) {
        return this.GetResource(`starship/${id}/`)
    }
}

const swapi = new SwapiService()
swapi.getPerson(3).then((people) => {
    console.log(people.name)
})

