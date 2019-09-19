pragma solidity >=0.4.22 <0.6.0;
import "remix_tests.sol"; // this import is automatically injected by Remix.
contract sam {
   
   test1 ballotToTest;
    function beforeAll () public {
       ballotToTest = new Ballot(2);
    }
    
    function test2 () public {
        ballotToTest.vote(1);
        Assert.equal(ballotToTest.winningProposal(), uint(1), test3);
    }
    
    function checkWinninProposalWithReturnValue () public view returns (bool) {
        return ballotToTest.winningProposal() == 1;
    }
}