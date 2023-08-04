function skillMember() {
  return {
    restrict: 'E',
    templateUrl: 'views/skill/member.html',
    scope: {
      member: '=',
      skills: '='
    }
  };
}