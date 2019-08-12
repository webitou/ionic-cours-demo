
  Pod::Spec.new do |s|
    s.name = 'GyroscopePlugin'
    s.version = '0.0.1'
    s.summary = 'gyroscope'
    s.license = 'MIT'
    s.homepage = 'n'
    s.author = ''
    s.source = { :git => 'n', :tag => s.version.to_s }
    s.source_files = 'ios/Plugin/**/*.{swift,h,m,c,cc,mm,cpp}'
    s.ios.deployment_target  = '11.0'
    s.dependency 'Capacitor'
  end