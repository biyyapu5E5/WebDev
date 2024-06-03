n = [[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20],[21,22,23,24,25]]
# n = [[1,2],[3,4]]
rowStart = 0
rowEnd = len(n)-1
colStart = 0
colEnd = len(n[0])-1
while(rowStart<=rowEnd and colStart<=colEnd):

    for i in range(colStart,colEnd+1):
        print(n[rowStart][i],end='->')
    rowStart+=1 
    for i in range(rowStart,rowEnd+1):
        print(n[i][colEnd],end='->')
    colEnd-=1
    if(rowStart<=rowEnd):
        for i in range(colEnd,colStart-1,-1):
            print(n[rowEnd][i],end='->')
        rowEnd-=1
    if(colStart<=colEnd):
        for i in range(rowEnd,rowStart-1,-1):
            print(n[i][colStart],end='->')
        colStart+=1

    

