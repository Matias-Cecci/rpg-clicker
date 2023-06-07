import './../Styles/Enemy.css'

const Enemy = ({ enemyHealth, enemyDamage, enemyLevel, }) => {
    const healthPercentage = (enemyHealth / 100) * 100;
    const newHealthPercentage = (enemyHealth /1000 * 1000)

   



    return (
        <>
            <div className="enemy">
                <div className="health-bar">
                    <div
                        className="health-bar-progress"
                        style={{ width: `${ enemyHealth >= 100 ? newHealthPercentage : healthPercentage}%` }}
                    />
                </div>
                <h2 className="enemy-stats">Enemy</h2>
                <p className="enemy-stats">Health: {enemyHealth}</p>
                <p className="enemy-stats">Damage: {enemyDamage}</p>
                <p className="enemy-stats">Level: {enemyLevel}</p>
            </div>

        </>
    )
}



export default Enemy;