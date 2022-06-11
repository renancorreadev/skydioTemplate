import React from "react"
import { PersonProps } from "../../interfaces/personProps"

export function CalculateSum() {
    /**
     *
     *
     * @param {number} a
     * @param {number} b
     * @return {*}
     */
    function Soma(a: number, b: number) {
        return a + b
    }

    const Pessoa: PersonProps = {
        name: "João",
        age: 20,
        city: "São Paulo",
    }

    return (
        <div>
            <h2>Calculate Sum</h2>
            <p>Soma: {Soma(10, 20)}</p>
            <span>
                {Pessoa.name} is {Pessoa.age} years old and lives in{" "}
                {Pessoa.city}
            </span>
        </div>
    )
}
