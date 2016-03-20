define('groom-clients-ember/pods/components/file-upload/component', ['exports', 'ember', 'ember-uploader'], function (exports, _ember, _emberUploader) {
  exports['default'] = _emberUploader['default'].FileField.extend({
    url: '',
    filesDidChange: function filesDidChange(files) {
      var uploadUrl = this.get('url');

      var uploader = _emberUploader['default'].Uploader.create({
        url: uploadUrl
      });

      if (!_ember['default'].isEmpty(files)) {
        uploader.upload(files[0]);
      }
    }
  });
});