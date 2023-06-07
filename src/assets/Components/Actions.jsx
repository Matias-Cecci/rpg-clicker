import './../../Game.css'

const Actions = ({handleAttackButton, handleUpgradeDamage, handleUpgradeHealth }) => {


   return (
        <>
            <div className="actions">
                <button className='actions-button-attack' onClick={handleAttackButton}>Attack</button>
                <button className='actions-button-damage' onClick={handleUpgradeDamage}>Upgrade Damage (+10 Coins)</button>
                <button className='actions-button-health' onClick={handleUpgradeHealth}>10 Health recovery (+5 Coins)</button>
            </div>

        </>
    )
}



export default Actions;