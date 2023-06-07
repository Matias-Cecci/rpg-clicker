import { useState, useEffect } from 'react'
import './Game.css'
import Player from './assets/Components/Player'
import Enemy from './assets/Components/Enemy'
import Actions from './assets/Components/Actions';

const Game = () => {
  //ENEMY STATS
  const [enemyHealth, setEnemyHealth] = useState(10)
  const [enemyDamage, setEnemyDamage] = useState(1)
  const [enemyLevel, setEnemyLevel] = useState(1)
  const [showEnemy, setShowEnemy] = useState(true);
  //PLAYER STATS
  const [playerHealth, setPlayerHealth] = useState(30)
  const [playerDamage, setPlayerDamage] = useState(1)
  const [playerLevel, setPlayerLevel] = useState(1)
  const [playerCoins, setPlayerCoins] = useState(0)

  const handleEnemyDefeated = () => {
    if (playerLevel < 5) {
      setPlayerCoins(playerCoins + 1);
      setPlayerLevel(playerLevel + 1);
      setEnemyHealth(15 + enemyLevel * 4);
      setPlayerHealth(playerHealth + playerLevel * 20); // Regenerar vida al subir de nivel
      setEnemyLevel(enemyLevel + 1)
      setEnemyDamage(enemyDamage + 1)
    } else {
      setPlayerCoins(playerCoins + 1);
      setPlayerLevel(playerLevel + 1);
      setEnemyHealth(50 + enemyLevel * 5);
      setPlayerHealth(playerHealth + playerLevel * 15); // Regenerar vida al subir de nivel
      setEnemyLevel(enemyLevel + 1)
      setEnemyDamage(enemyDamage + 2)
    }

  };


  const handleUpgradeDamage = () => {
    if (playerCoins >= 10) {
      const newPlayerHealth = playerHealth - calculateEnemyDamage();
      if (newPlayerHealth <= 0) {
        handlePlayerDefeated();
      }
      setPlayerHealth(newPlayerHealth);
      setPlayerCoins(playerCoins - 10);
      setPlayerDamage(playerDamage + 1);
    } else {
      alert("You don't have enought coins to upgrade");
    }
  };

  const handleUpgradeHealth = () => {
    if (playerCoins >= 5) {
      setPlayerCoins(playerCoins - 5);
      setPlayerHealth(playerHealth + 10)
    } else {
      alert("You don't have enought coins to upgrade");
    }
  }

  const calculateEnemyDamage = () => {
    return Math.floor(Math.random() * 3) + enemyDamage; // Daño aleatorio entre 1 y 3
  };

  const handlePlayerDefeated = () => {
    alert("GAME OVER: restart game??")
    setEnemyDamage(1)
    setEnemyHealth(10)
    setEnemyLevel(1)
    setPlayerCoins(0)
    setPlayerDamage(1)
    setPlayerHealth(20)
    setPlayerLevel(1)
  }


  const handleAttackButton = () => {
    if (enemyHealth > 0) {
      const newEnemyHealth = enemyHealth - playerDamage;
      if (newEnemyHealth <= 0) {
        setShowEnemy(false);
        setTimeout(() => {
          handleEnemyDefeated();
          setShowEnemy(true);
        }, 2000);
      } else {
        setEnemyHealth(newEnemyHealth);

        const newPlayerHealth = playerHealth - calculateEnemyDamage();
        if (newPlayerHealth <= 0) {
          handlePlayerDefeated();
        } else {
          setPlayerHealth(newPlayerHealth);
          setPlayerCoins(playerCoins + 1); // Cada golpe suma una moneda
        }
      }
    }
  };

  useEffect(() => {
    //setEnemyHealth(10 + playerLevel * 2);
  }, [playerLevel]);



  return (
    <div className="game-container">
      <h1>Juego de Rol RPG Clicker</h1>
      <div className='enemy-body' onClick={handleAttackButton}>
        {showEnemy && (
          <Enemy
            enemyHealth={enemyHealth}
            enemyDamage={enemyDamage}
            enemyLevel={enemyLevel}
          />
        )}

      </div>
      <div className='player-body'>
        <Player
          playerCoins={playerCoins}
          playerLevel={playerLevel}
          playerDamage={playerDamage}
          playerHealth={playerHealth}
          handleUpgradeDamage={handleUpgradeDamage}
          handleUpgradeHealth={handleUpgradeHealth}
        />
      </div>
      <div className='actions-body'>
        <Actions
          handleAttackButton={handleAttackButton}
          handleUpgradeDamage={handleUpgradeDamage}
          handleUpgradeHealth={handleUpgradeHealth}
        />
      </div>
    </div>
  );
};

export default Game;






