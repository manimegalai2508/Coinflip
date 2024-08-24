import React, { useState } from 'react';
import detectProvider from '@metamask/detect-provider';
import { Box, Button, Input, Select, Text, VStack } from '@chakra-ui/react';

const Coinflip = () => {
  const [wallet, setWallet] = useState(null);
  const [amount, setAmount] = useState('');
  const [side, setSide] = useState('heads');
  const [result, setResult] = useState(null);
  const [connectionStatus, setConnectionStatus] = useState('');
  const [betStatus, setBetStatus] = useState('');

  const connectWallet = async () => {
    console.log('Attempting to connect wallet...');
    const provider = await detectProvider();
    if (provider) {
      try {
        await provider.request({ method: 'eth_requestAccounts' });
        setWallet(provider);
        setConnectionStatus('Wallet connected successfully!');
        console.log('Wallet connected:', provider);
      } catch (error) {
        console.error('Error connecting wallet:', error);
        setConnectionStatus('Failed to connect wallet. Please try again.');
      }
    } else {
      alert('Please install MetaMask!');
      setConnectionStatus('MetaMask is not installed.');
    }
  };

  const flipCoin = () => {
    if (amount <= 0) {
      setBetStatus('Amount must be greater than 0.');
      return;
    }

    const flipResult = Math.random() < 0.5 ? 'heads' : 'tails';
    setResult(flipResult);

    if (flipResult === side) {
      alert(`You won! You get ${amount * 2} tokens back.`);
    } else {
      alert('You lost! Better luck next time.');
    }
    setBetStatus('');
  };

  return (
    <Box p={4} maxW="md" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <VStack spacing={4}>
        <Button onClick={connectWallet} colorScheme="teal">
          Connect Wallet
        </Button>
        {connectionStatus && <Text>{connectionStatus}</Text>}
        <Input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
          size="md"
        />
        <Select
          value={side}
          onChange={(e) => setSide(e.target.value)}
          size="md"
          bg="black"
          color="white"
        >
          <option value="heads" style={{ backgroundColor: 'black', color: 'white' }}>Heads</option>
          <option value="tails" style={{ backgroundColor: 'black', color: 'white' }}>Tails</option>
        </Select>
        <Button onClick={flipCoin} colorScheme="teal">
          Flip Coin
        </Button>
        {betStatus && <Text color="red.500">{betStatus}</Text>}
        {result && <Text>Result: {result}</Text>}
      </VStack>
    </Box>
  );
};

export default Coinflip;