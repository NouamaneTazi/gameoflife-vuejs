const GOL = {
    getAliveNeighbours : function(coors, pattern) {
        let {i,j}= coors
        const ngbrs_candidates = [[1,0],[-1,0],[0,1],[0,-1],[1,1],[-1,-1],[1,-1],[-1,1]]
        const isInRange = function(coors) {
            return 0<=coors[0] && coors[0]<pattern.length && 0<=coors[1] && coors[1]<pattern[0].length
        }
        return ngbrs_candidates.filter(([n,m]) => isInRange([i+n,j+m]) ? pattern[i+n][j+m]==1 : false).length
    },
    getNextPattern : function(pattern) {
        let livesNext = [], diesNext = [], staysAlive = []
        for (var i=0;i<pattern.length;i++) {
            for (var j=0;j<pattern[0].length;j++) {
                const alive_ngbrs = this.getAliveNeighbours({i,j}, pattern)
                if (alive_ngbrs==3 && pattern[i][j]!=1){
                    livesNext.push({i,j})
                } else if (alive_ngbrs==2 || alive_ngbrs==3){
                    staysAlive.push({i,j})
                } else if (pattern[i][j]==1){
                    diesNext.push({i,j})
                }
            }
        }

        livesNext.map(({i,j}) => pattern[i][j] = 1)
        diesNext.map(({i,j}) => pattern[i][j] = 0)
        return pattern
    }
}

export default GOL;