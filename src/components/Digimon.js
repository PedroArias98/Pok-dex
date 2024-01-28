const Digimon = (digimon) => {

    return <div>

        <h3>{digimon.name}</h3>
        <img src={digimon.img} alt={digimon.name} width='300' />
        <p>Level: {digimon.level}</p>
    </div>
}

export default Digimon;