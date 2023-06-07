import './../Styles/Player.css'

const Player = ({ playerCoins, playerDamage, playerHealth, playerLevel }) => {
    const healthPercentage = (playerHealth / 100) * 100;
    const newHealthPercentage = (playerHealth / 1000 * 1000)



    return (
        <>
            <div className="player">
                <div className="health-bar">
                    <div
                        className="health-bar-progress"
                        style={{ width: `${playerHealth >= 100 ? newHealthPercentage : healthPercentage}%` }}
                    />
                </div>
                <h2 className="player-stats">Player</h2>
                <p className="player-stats">Level: {playerLevel}</p>
                <p className="player-stats">Damage: {playerDamage}</p>
                <p className="player-stats">Health: {playerHealth}</p>
                <p className="player-stats">Coins: {playerCoins}</p>

            </div>
        </>
    )
}


export default Player;